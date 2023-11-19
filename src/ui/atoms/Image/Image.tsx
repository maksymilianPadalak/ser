import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";

// TODO export Image props to separate type
type ImageProps = {
  src: string;
  alt: string;
} & ComponentWithClassNameProps;

const Image: FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
