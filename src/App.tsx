import { FC } from "react";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";
import { CountdownClock } from "@/ui/organisms/CountdownClock";
import Image from "@/ui/atoms/Image/Image.tsx";
import SirWithMouseImage from "@assets/images/sir-and-mouse.webp";

const App: FC = () => (
  <div className={"bg-yellow-400 flex justify-center"}>
    <div
      className={"h-screen flex flex-col items-center content-center max-w-7xl"}
    >
      <Image src={SirWithMouseImage} alt={"sir-with-mouse-image"} />
      <HeadingWithText heading={"Ser"} text={"hmmm?"} />
      <CountdownClock className={"mt-20"} targetDate={new Date("2023-12-30")} />
    </div>
  </div>
);

export default App;
