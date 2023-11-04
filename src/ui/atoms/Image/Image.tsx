import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";

type ImageProps = {
  src: string;
  alt: string;
} & ComponentWithClassNameProps;

const Image: FC<ImageProps> = ({ src, alt }) => <img src={src} alt={alt} />;

export default Image;
