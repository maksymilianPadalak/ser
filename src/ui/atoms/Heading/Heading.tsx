import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";

type HeaderProps = {
  text: string;
} & ComponentWithClassNameProps;

export const Heading: FC<HeaderProps> = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);
