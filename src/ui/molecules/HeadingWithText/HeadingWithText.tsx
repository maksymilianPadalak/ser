import { FC } from "react";
import { Heading } from "@/ui/atoms/Heading";
import { Text } from "@/ui/atoms/Text";

type HeadingWithTextProps = {
  heading: string;
  text: string;
};

export const HeadingWithText: FC<HeadingWithTextProps> = ({
  heading,
  text,
}) => (
  <>
    <Heading text={heading} className={"mt-8"} />
    <Text text={text} className={"mt-4"} />
  </>
);
