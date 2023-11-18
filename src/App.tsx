import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroBackgroundImage } from "@/ui/organisms/HeroBackgroundImage";
import { VideoTextBlock } from "@/ui/organisms/VideoTextBlock";
import SirCommercialVideo from "@assets/videos/sir-commercial.mp4";
import { SocialMediaBlock } from "@/ui/organisms/SocialMediaBlock";
import InstagramImage from "@assets/images/instagram.webp";

const App: FC = () => (
  <div className={"bg-yellow-400 flex flex-col justify-center"}>
    <HeroBackgroundImage
      title={"Twój ser zasługuje na tytuł szlachecki"}
      description={"To jest kurwa ser"}
      imageUrl={SirWithMouseImage}
    />
    <VideoTextBlock
      className={"bg-black"}
      title={"Reklama sera czeka na Ciebie"}
      videoSrc={SirCommercialVideo}
      videoThumbnail={SirWithMouseImage}
    />
    <SocialMediaBlock
      className={"bg-yellow-400"}
      title={"Pa kurwa"}
      description={"Instagram kurwa"}
      image1={InstagramImage}
      image2={InstagramImage}
      image3={InstagramImage}
    />
  </div>
);

export default App;
