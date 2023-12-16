import { FC } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { ClockDigitWithLabel } from "../ClockDigitWithLabel/ClockDigitWithLabel.tsx";
import { TimeUnitsInPolish } from "@/ui/organisms/CountdownClockBlock/components/CountdownClock/constants.ts";
import { TimeUnits } from "@/ui/organisms/CountdownClockBlock/components/CountdownClock/enums.ts";

export type CountdownClockProps = {
  targetDate: Date;
} & ComponentWithClassNameProps;

export const CountdownClock: FC<CountdownClockProps> = ({
  targetDate,
  className,
}) => {
  const timeValues = useCountdown(targetDate);

  return (
    <div className={className}>
      {Object.entries(timeValues).map(([key, value], index) => (
        <ClockDigitWithLabel
          key={index}
          digit={value}
          label={capitalizeFirstLetter(TimeUnitsInPolish[key as TimeUnits])}
        />
      ))}
    </div>
  );
};
