import { FC } from "react";
import { Heading } from "@/ui/atoms/Heading";
import { Text } from "@/ui/atoms/Text";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type HeadingWithTextProps = {
  heading: string;
  text?: string;
} & ComponentWithClassNameProps;

export const HeadingWithText: FC<HeadingWithTextProps> = ({
  heading,
  text,
  className,
}) => (
  <div className={cx("flex flex-col items-center", className)}>
    <Heading text={heading} />
    {text && <Text text={text} className={"mt-2 md:mt-3 lg:mt-4"} />}
  </div>
);
