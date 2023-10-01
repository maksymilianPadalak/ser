import "./App.css";
import { FC } from "react";
import { HeadingWithText } from "./ui/molecules/HeadingWithText.tsx";
import { CountdownClock } from "./ui/organisms/CountdownClock.tsx";

const App: FC = () => (
  <div className={"h-screen flex flex-col items-center bg-yellow-400"}>
    <CountdownClock />
    <HeadingWithText heading={"Ser"} text={"hmmm?"} />
  </div>
);

export default App;
