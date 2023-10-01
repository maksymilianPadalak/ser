import { FC } from "react";
import { useCountdown } from "../../../hooks/useCountdown.tsx";
import { ClockDigitWithLabel } from "../../molecules/ClockDigitWithLabel.tsx";
import cx from "classnames";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter.ts";

type CountdownClock = {
  className?: string;
};

export const CountdownClock: FC<CountdownClock> = ({ className }) => {
  const timeValues = useCountdown(new Date("2024-10-10"));

  return (
    <div className={cx("grid grid-cols-4 gap-20", className)}>
      {Object.entries(timeValues).map(([key, value], index) => (
        <ClockDigitWithLabel
          key={index}
          digit={value}
          label={capitalizeFirstLetter(key)}
        />
      ))}
    </div>
  );
};
