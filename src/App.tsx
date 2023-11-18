import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroBackgroundImage } from "@/ui/organisms/HeroBackgroundImage";
import { VideoTextBlock } from "@/ui/organisms/VideoTextBlock";
import SirCommercialVideo from "@assets/videos/sir-commercial.mp4";

const App: FC = () => (
  <div className={"bg-yellow-400 flex flex-col justify-center"}>
    <HeroBackgroundImage
      title={"Twój ser zasługuje na tytuł szlachecki"}
      description={"To jest kurwa ser"}
      imageUrl={SirWithMouseImage}
    />
    <VideoTextBlock
      title={"Reklama sera czeka na Ciebie"}
      videoSrc={SirCommercialVideo}
      videoThumbnail={SirWithMouseImage}
    />
  </div>
);

export default App;
