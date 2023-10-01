import { FC } from "react";
import { useCountdown } from "../../../hooks/useCountdown.tsx";
import { ClockDigitWithLabel } from "../../molecules/ClockDigitWithLabel.tsx";
import cx from "classnames";
import { TimeUnits } from "./enums.ts";

type CountdownClock = {
  className?: string;
};

export const CountdownClock: FC<CountdownClock> = ({ className }) => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2024-10-10"),
  );

  const TimeValues: Record<TimeUnits, number> = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };

  return (
    <div className={cx("grid grid-cols-4 gap-10", className)}>
      {Object.entries(TimeValues).map(([key, value], index) => (
        <ClockDigitWithLabel
          key={index}
          digit={value}
          label={key}
          className={"mx-2"}
        />
      ))}
    </div>
  );
};
