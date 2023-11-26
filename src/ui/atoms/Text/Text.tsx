import { FC } from "react";
import cx from "classnames";
import { ComponentWithClassNameProps } from "@/globalTypes";

type TextProps = {
  text: string;
} & ComponentWithClassNameProps;

export const Text: FC<TextProps> = ({ text, className, ...props }) => (
  <h1 className={cx("font-sans text-black", className)} {...props}>
    {text}
  </h1>
);
