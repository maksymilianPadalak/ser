import { FC } from "react";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import "./HeroBackgroundVideo.css";

type HeroBackgroundVideoProps = {
  title: string;
  videoUrl: string;
};

export const HeroBackgroundVideo: FC<HeroBackgroundVideoProps> = ({
  title,
  videoUrl,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <Text className={cx("text-6xl text-white", "pulse")} text={title} />
      </div>
    </div>
  );
};
