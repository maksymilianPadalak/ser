import { FC } from "react";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";
import { HeroBackgroundImage } from "@/ui/organisms/HeroBackgroundImage";

const App: FC = () => (
  <div className={"bg-yellow-400 flex justify-center"}>
    <HeroBackgroundImage title={"Dupa"} imageUrl={SirWithMouseImage} />
  </div>
);

export default App;
