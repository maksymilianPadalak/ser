import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroImage } from "@/ui/organisms/HeroImage";
import { VideoTextBlock } from "@/ui/organisms/VideoTextBlock";
import SirCommercialVideo from "@assets/videos/sir-commercial.mp4";
import { SocialMediaBlock } from "@/ui/organisms/SocialMediaBlock";
import Sir from "@assets/images/sir.webp";
import Socials from "@assets/images/socials.webp";
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
    <TwoImageHero
      image1={Replace}
      image2={Replace2}
      title={"Podmienimy przykładowy ser na Państwa, wyjątkowy ser"}
    />
    <SocialMediaBlock
      className={"bg-black"}
      title={"Przygotujemy formaty na różne platformy"}
      description={"TikTok, Facebook, Instagram"}
      image={Socials}
    />
    <ContactBlock
      title={"Kontakt"}
      imageSrc={CheeseLogo}
      contactInfo={[
        { title: "telefon", value: "+48 881 454 647" },
        { title: "email", value: "antoni.padalak@gmail.com" },
        { title: "adres", value: "Poznań, ul. Poznańska 24/11" },
      ]}
    />
    <CountdownClockBlock
      className={"bg-black"}
      title={"Czekamy na Państwa ser"}
      clockTitle={"Oferty przyjmujemy jeszcze:"}
      image={Mouse}
    />
  </div>
);

export default App;
