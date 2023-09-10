import { FC } from "react";
import { Heading } from "../atoms/Heading.tsx";
import { Text } from "../atoms/Text.tsx";

export type HeadingWithTextProps = {
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
