import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroImage } from "@/ui/organisms/HeroImage";
import { VideoTextBlock } from "@/ui/organisms/VideoTextBlock";
import SirCommercialVideo from "@assets/videos/sir-commercial.mp4";
import { SocialMediaBlock } from "@/ui/organisms/SocialMediaBlock";
import Sir from "@assets/images/sir.webp";
import InstagramImage from "@assets/images/instagram.webp";
import CheeseLogo from "@assets/images/cheese-logo.webp";
import Replace from "@assets/images/replace.webp";
import Replace2 from "@assets/images/replace2.webp";

import Mouse from "@assets/images/mouse.webp";
import { CountdownClockBlock } from "@/ui/organisms/CountdownClockBlock/CountdownClockBlock.tsx";
import CheeseLoop from "@assets/videos/cheese-loop.mp4";
import { HeroBackgroundVideo } from "@/ui/organisms/HeroBackgroundVideo";
import { TwoImageHero } from "@/ui/organisms/TwoImageHero";
import { ContactBlock } from "@/ui/organisms/ContactBlock/ContactBlock.tsx";

const App: FC = () => (
  <div>
    <HeroBackgroundVideo title={"Gotowa reklama sera"} videoUrl={CheeseLoop} />
    <HeroImage
      title={"Państwa ser zasługuje na tytuł szlachecki"}
      description={"Z przyjemnościa mu go nadamy"}
      imageUrl={Sir}
    />
    <VideoTextBlock
      className={"bg-black"}
      title={"Przygotowaliśmy dla Państwa reklamę sera na wyłączność!"}
      videoSrc={SirCommercialVideo}
      videoThumbnail={SirWithMouseImage}
    />
    <SocialMediaBlock
      title={"Formaty na różne platformy!"}
      description={"Youtube, Instagram i Tiktok!"}
      image1={InstagramImage}
      image2={InstagramImage}
      image3={InstagramImage}
    />
    <TwoImageHero
      image1={Replace}
      image2={Replace2}
      className={"bg-black"}
      title={"Podmień na swoje i gotowe"}
    />
    <ContactBlock
      className={""}
      email={"antoni.padalak@kurwy.pl"}
      telephone={"881454647"}
      imageSrc={CheeseLogo}
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
