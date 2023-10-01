import { FC } from "react";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";
import { CountdownClock } from "@/ui/organisms/CountdownClock";

const App: FC = () => (
  <div className={"h-screen flex flex-col items-center bg-yellow-400"}>
    <HeadingWithText heading={"Ser"} text={"hmmm?"} />
    <CountdownClock className={"mt-20"} targetDate={new Date("2023-10-30")} />
  </div>
);

export default App;
