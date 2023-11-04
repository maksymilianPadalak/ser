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
      <HeadingWithText heading={"Ser"} text={"hmmm?"} className={"my-4"} />
      <Image src={SirWithMouseImage} alt={"sir-with-mouse-image"} />
      <HeadingWithText
        heading={"Opierdol se serek"}
        text={"Kurwa kup bo zara sie czas skonczy"}
        className={"my-4"}
      />
      <HeadingWithText heading={"Leci czas kurwa"} className={"mt-10 mb-4"} />
      <CountdownClock targetDate={new Date("2023-12-30")} />
    </div>
  </div>
);

export default App;
