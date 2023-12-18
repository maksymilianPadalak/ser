import { FC, useEffect } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import Image from "@/ui/atoms/Image/Image.tsx";
import { Text } from "@/ui/atoms/Text";
import { CountdownClock } from "./components/CountdownClock/CountdownClock.tsx";
import AOS from "aos";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={className} data-aos="zoom-out-up">
      <Text
        text={title}
        className={"flex justify-center text-center text-white p-10 text-5xl"}
      />
      <div className={"grid grid-cols-12"}>
        <Image
          className={"col-span-12 xl:col-span-6 mt-10 order-2 xl:order-1"}
          src={image}
          alt={"mouse"}
        />
        <div
          className={
            "flex col-span-12 xl:col-span-6 flex-col justify-center items-center order-1 xl:order-2 xl:mr-10"
          }
        >
          <Text
            text={clockTitle}
            className={
              "flex justify-center text-white text-center my-10 text-3xl xl:text-5xl"
            }
          />
          <CountdownClock
            className={"grid grid-cols-4 gap-20 w-200 xl:w-500  justify-center"}
            targetDate={new Date("2024-01-31")}
          />
        </div>
      </div>
    </div>
  );
};
