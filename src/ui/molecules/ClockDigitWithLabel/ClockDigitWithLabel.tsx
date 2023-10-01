import { FC } from "react";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { ClockDigit } from "@/ui/atoms/ClockDigit";

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
      <Text text={label} className={"mb-2 lg:mb-6"} />
      <ClockDigit digit={digit} className={"w-full"} />
    </div>
  );
};
