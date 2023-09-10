import { FC } from "react";
import cx from "classnames";

type HeaderProps = {
  text: string;
  className?: string;
};

export const Heading: FC<HeaderProps> = ({ text, className }) => (
  <h1 className={cx("font-serif text-8xl my-12 text-black", className)}>
    {text}
  </h1>
);
