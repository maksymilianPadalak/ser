import { FC } from "react";
import { Video } from "@/ui/organisms/VideoTextBlock/components/Video/Video.tsx";
import { Text } from "@/ui/atoms/Text";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type VideoTextBlockProps = {
  title: string;
  videoSrc: string;
  videoThumbnail: string;
} & ComponentWithClassNameProps;

export const VideoTextBlock: FC<VideoTextBlockProps> = ({
  title,
  videoSrc,
  videoThumbnail,
  className,
}) => {
  return (
    <div className={cx("grid grid-cols-12", className)}>
      <div
        className={"flex col-span-12 xl:col-span-6 justify-center items-center"}
      >
        <Text
          text={title}
          className={"text-white text-center text-3xl py-5 xl:text-5xl"}
        />
      </div>
      <div className={"col-span-12 xl:col-span-6"}>
        <Video
          src={videoSrc}
          className={"xl:p-10"}
          thumbnail={videoThumbnail}
        />
      </div>
    </div>
  );
};
