import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import Image from "@/ui/atoms/Image/Image.tsx";
import { Text } from "@/ui/atoms/Text";
import { CountdownClock } from "./components/CountdownClock/CountdownClock.tsx";

type CountdownClockBlockProps = {
  title: string;
  clockTitle: string;
  image: string;
} & ComponentWithClassNameProps;

export const CountdownClockBlock: FC<CountdownClockBlockProps> = ({
  title,
  clockTitle,
  image,
  className,
}) => {
  return (
    <div className={className}>
      <Text
        text={title}
        className={"flex justify-center text-white py-10 text-5xl"}
      />
      <div className={"grid grid-cols-12"}>
        <div className={"col-span-6 mt-10"}>
          <Image src={image} alt={"mouse"} />
        </div>
        <div className={"col-span-6 flex flex-col justify-center items-center"}>
          <Text
            text={clockTitle}
            className={"flex justify-center text-white my-10 text-5xl"}
          />
          <CountdownClock targetDate={new Date("2024-01-01")} />
        </div>
      </div>
    </div>
  );
};
