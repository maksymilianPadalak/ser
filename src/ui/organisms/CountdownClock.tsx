import { FC } from "react";
import { useCountdown } from "../../hooks/useCountdown.tsx";
import { ClockDigitWithLabel } from "../molecules/ClockDigitWithLabel.tsx";

export const CountdownClock: FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2024-10-10"),
  );

  return (
    <div className="flex">
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
