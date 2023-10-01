import { FC } from "react";
import cx from "classnames";
import { ComponentWithClassNameProps } from "../../globalTypes/ComponentWithClassNameProps.ts";

type TextProps = {
  text: string;
} & ComponentWithClassNameProps;

export const Text: FC<TextProps> = ({ text, className }) => (
  <h1 className={cx("font-sans text-lg text-black", className)}>{text}</h1>
);
