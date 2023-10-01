import { FC } from "react";
import { ComponentWithClassNameProps } from "../../globalTypes/ComponentWithClassNameProps.ts";
import cx from "classnames";

type ClockDigitProps = {
  digit: number;
} & ComponentWithClassNameProps;

export const ClockDigit: FC<ClockDigitProps> = ({ digit, className }) => {
  return (
    <div
      className={cx(
        "text-xl lg:text-5xl p-6 lg:p-8 flex justify-center items-center bg-black text-white border-2 lg:border-4 rounded-full h-10 w-10 lg:h-32 lg:w-32",
        className,
      )}
    >
      {digit}
    </div>
  );
};
