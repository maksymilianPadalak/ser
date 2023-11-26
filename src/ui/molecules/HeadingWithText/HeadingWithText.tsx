import { FC } from "react";
import { Heading } from "@/ui/atoms/Heading";
import { Text } from "@/ui/atoms/Text";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type HeadingWithTextProps = {
  heading: string;
  text?: string;
  headingClassName?: string;
  textClassName?: string;
} & ComponentWithClassNameProps;

export const HeadingWithText: FC<HeadingWithTextProps> = ({
  heading,
  text,
  headingClassName,
  textClassName,
  className,
  ...props
}) => (
  <div className={cx("flex flex-col items-center", className)} {...props}>
    <Heading text={heading} className={cx(headingClassName)} />
    {text && <Text text={text} className={cx("mt-2 text-2", textClassName)} />}
  </div>
);
