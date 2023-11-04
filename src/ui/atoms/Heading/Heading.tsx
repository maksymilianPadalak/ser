import { FC } from "react";
import cx from "classnames";
import { ComponentWithClassNameProps } from "@/globalTypes";

type HeaderProps = {
  text: string;
} & ComponentWithClassNameProps;

export const Heading: FC<HeaderProps> = ({ text, className }) => (
  <h1
    className={cx(
      "font-serif text-3xl md:text-5xl lg:text-8xl text-black",
      className,
    )}
  >
    {text}
  </h1>
);
