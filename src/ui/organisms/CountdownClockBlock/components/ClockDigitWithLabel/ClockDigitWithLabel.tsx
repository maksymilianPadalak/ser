import { FC } from "react";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { ClockDigit } from "../ClockDigit/ClockDigit.tsx";

type ClockDigitWithLabelProps = {
  digit: number;
  label: string;
} & ComponentWithClassNameProps;

export const ClockDigitWithLabel: FC<ClockDigitWithLabelProps> = ({
  digit,
  label,
  className,
}) => {
  return (
    <div className={cx(className, "flex flex-col justify-center items-center")}>
      <Text text={label} className={"mb-6 text-white"} />
      <ClockDigit digit={digit} />
    </div>
  );
};
