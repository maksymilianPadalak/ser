import { FC } from "react";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";
import { CountdownClock } from "@/ui/organisms/CountdownClock";
import Image from "@/ui/atoms/Image/Image.tsx";

const App: FC = () => (
  <div className={"h-screen flex flex-col items-center bg-yellow-400"}>
    <Image />
    <HeadingWithText heading={"Ser"} text={"hmmm?"} />
    <CountdownClock className={"mt-20"} targetDate={new Date("2023-12-30")} />
  </div>
);

export default App;
