import { FC } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { ClockDigitWithLabel } from "@/ui/molecules/ClockDigitWithLabel";
import cx from "classnames";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { ComponentWithClassNameProps } from "@/globalTypes";

export type CountdownClockProps = {
  targetDate: Date;
} & ComponentWithClassNameProps;

export const CountdownClock: FC<CountdownClockProps> = ({
  targetDate,
  className,
}) => {
  const timeValues = useCountdown(targetDate);

  return (
    <div className={cx("grid grid-cols-4 gap-4 lg:gap-20", className)}>
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
