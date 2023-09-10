import { FC } from "react";
import cx from "classnames";

type TextProps = {
  text: string;
  className?: string;
};

export const Text: FC<TextProps> = ({ text, className }) => (
  <h1 className={cx("font-sans text-lg text-black", className)}>{text}</h1>
);
