import { FC } from "react";
import cx from "classnames";
import { ComponentWithClassNameProps } from "@/globalTypes/ComponentWithClassNameProps.ts";

type HeaderProps = {
  text: string;
} & ComponentWithClassNameProps;

export const Heading: FC<HeaderProps> = ({ text, className }) => (
  <h1 className={cx("font-serif text-8xl text-black", className)}>{text}</h1>
);
