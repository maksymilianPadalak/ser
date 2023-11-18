import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroBackgroundImage } from "@/ui/organisms/HeroBackgroundImage";

const App: FC = () => (
  <div className={"bg-yellow-400 flex flex-col justify-center"}>
    <HeroBackgroundImage
      title={"Twój ser zasługuje na tytuł szlachecki"}
      description={"To jest kurwa ser"}
      imageUrl={SirWithMouseImage}
    />
  </div>
);

export default App;
