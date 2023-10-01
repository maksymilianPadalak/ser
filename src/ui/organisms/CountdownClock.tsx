import { FC } from "react";
import { useCountdown } from "../../hooks/useCountdown.tsx";
import { ClockDigitWithLabel } from "../molecules/ClockDigitWithLabel.tsx";
import cx from "classnames";

type CountdownClock = {
  className?: string;
};

export const CountdownClock: FC<CountdownClock> = ({ className }) => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2024-10-10"),
  );

  return (
    <div className={cx("flex", className)}>
      <ClockDigitWithLabel digit={days} label={"days"} className={"mx-2"} />
      <ClockDigitWithLabel digit={hours} label={"hour"} className={"mx-2"} />
      <ClockDigitWithLabel
        digit={minutes}
        label={"minutes"}
        className={"mx-2"}
      />
      <ClockDigitWithLabel
        digit={seconds}
        label={"seconds"}
        className={"mx-2"}
      />
    </div>
  );
};
