import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type ClockDigitProps = {
  digit: number;
} & ComponentWithClassNameProps;

export const ClockDigit: FC<ClockDigitProps> = ({ digit, className }) => {
  return (
    <div
      className={cx(
        "text-5xl p-8 flex justify-center items-center bg-black text-white border-4 rounded-full h-32 w-32",
        className,
      )}
    >
      {digit}
    </div>
  );
};
