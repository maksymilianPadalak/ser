import "./App.css";
import { FC } from "react";
import { Heading } from "./atoms/Heading.tsx";

const App: FC = () => (
  <div className={"h-screen flex justify-center bg-yellow-400"}>
    <Heading text={"Ser"} />
  </div>
);

export default App;
