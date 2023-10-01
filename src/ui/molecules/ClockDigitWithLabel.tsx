import { FC } from "react";
import { ClockDigit } from "../atoms/ClockDigit.tsx";
import { Text } from "../atoms/Text.tsx";
import cx from "classnames";

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
    <div className={cx(className, "flex flex-col justify-center items-center")}>
      <Text text={label} />
      <ClockDigit digit={digit} />
    </div>
  );
};
