import { FC } from "react";
import { ClockDigit } from "../atoms/ClockDigit.tsx";
import { Text } from "../atoms/Text.tsx";
import cx from "classnames";
import { ComponentWithClassNameProps } from "../../globalTypes/ComponentWithClassNameProps.ts";

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
