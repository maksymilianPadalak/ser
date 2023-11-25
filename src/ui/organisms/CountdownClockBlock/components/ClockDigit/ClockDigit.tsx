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
        "text-xl xl:text-2xl xl:text-5xl p-7 xl:p-8 flex justify-center items-center bg-black text-white border-4 rounded-full h-8 w-8 xl:h-32 xl:w-32",
        className,
      )}
    >
      {digit}
    </div>
  );
};
