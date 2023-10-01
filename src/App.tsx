import "./App.css";
import { FC } from "react";
import { HeadingWithText } from "./molecules/HeadingWithText.tsx";
import { Clock } from "./atoms/Clock.tsx";

const App: FC = () => (
  <div className={"h-screen flex flex-col items-center bg-yellow-400"}>
    <Clock />
    <HeadingWithText heading={"Ser"} text={"hmmm?"} />
  </div>
);

export default App;
