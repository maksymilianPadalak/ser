import { FC } from "react";
import { ClockDigit } from "../atoms/ClockDigit.tsx";
import { Text } from "../atoms/Text.tsx";

type ClockDigitWithLabelProps = {
  digit: number;
  label: string;
  className?: string;
};

export const ClockDigitWithLabel: FC<ClockDigitWithLabelProps> = ({
  digit,
  label,
  className,
}) => {
  return (
    <div className={className}>
      <Text text={label} />
      <ClockDigit digit={digit} />
    </div>
  );
};
