import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroImage } from "@/ui/organisms/HeroImage";
import { VideoTextBlock } from "@/ui/organisms/VideoTextBlock";
import SirCommercialVideo from "@assets/videos/sir-commercial.mp4";
import { SocialMediaBlock } from "@/ui/organisms/SocialMediaBlock";
import Sir from "@assets/images/sir.webp";
import InstagramImage from "@assets/images/instagram.webp";
import Mouse from "@assets/images/mouse.webp";
import { CountdownClockBlock } from "@/ui/organisms/CountdownClockBlock/CountdownClockBlock.tsx";
import CheeseLoop from "@assets/videos/cheese-loop.mp4";
import { HeroBackgroundVideo } from "@/ui/organisms/HeroBackgroundVideo";

const App: FC = () => (
  <div>
    <HeroBackgroundVideo
      title={"Ogarnij se kurwa reklame serka"}
      videoUrl={CheeseLoop}
    />
    <HeroImage
      title={"Twój ser zasługuje na tytuł szlachecki"}
      description={"To jest kurwa ser"}
      imageUrl={Sir}
    />
    <VideoTextBlock
      className={"bg-black"}
      title={"Reklama sera czeka na Ciebie"}
      videoSrc={SirCommercialVideo}
      videoThumbnail={SirWithMouseImage}
    />
    <SocialMediaBlock
      title={"Pa kurwa"}
      description={"Instagram kurwa"}
      image1={InstagramImage}
      image2={InstagramImage}
      image3={InstagramImage}
    />
    <CountdownClockBlock
      className={"bg-black"}
      title={"Szybko kurwa"}
      clockTitle={"Czas do konca kurwa licytacji"}
      image={Mouse}
    />
  </div>
);

export default App;
