import { FC } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import cx from "classnames";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { ClockDigitWithLabel } from "../ClockDigitWithLabel/ClockDigitWithLabel.tsx";

export type CountdownClockProps = {
  targetDate: Date;
} & ComponentWithClassNameProps;

export const CountdownClock: FC<CountdownClockProps> = ({
  targetDate,
  className,
}) => {
  const timeValues = useCountdown(targetDate);

  return (
    <div className={cx("grid grid-cols-4 gap-20 w-700", className)}>
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
