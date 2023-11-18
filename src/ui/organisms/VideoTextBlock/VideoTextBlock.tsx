import { FC } from "react";
import { Video } from "@/ui/organisms/VideoTextBlock/components/Video/Video.tsx";
import { Text } from "@/ui/atoms/Text";

type VideoTextBlockProps = {
  title: string;
  videoSrc: string;
};

export const VideoTextBlock: FC<VideoTextBlockProps> = ({
  title,
  videoSrc,
}) => {
  return (
    <div className={"grid grid-cols-12 bg-black"}>
      <div className={"col-span-6 flex justify-center items-center"}>
        <Text text={title} className={"text-white text-5xl"} />
      </div>
      <div className={"col-span-6"}>
        <Video src={videoSrc} className={"p-10"} />
      </div>
    </div>
  );
};
