import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type VideoProps = {
  src: string;
} & ComponentWithClassNameProps;

export const Video: FC<VideoProps> = ({ src, className }) => {
  return (
    <video className={cx("w-full", className)} controls preload="metadata">
      <source src={src} type="video/mp4" />
    </video>
  );
};
