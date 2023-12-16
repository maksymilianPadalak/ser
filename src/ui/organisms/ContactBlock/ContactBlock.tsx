import { FC, useEffect } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import Image from "@/ui/atoms/Image/Image.tsx";
import AOS from "aos";

type ContactBlockProps = {
  title: string;
  imageSrc: string;
  contactInfo: { title: string; value: string }[];
} & ComponentWithClassNameProps;

export const ContactBlock: FC<ContactBlockProps> = ({
  title,
  contactInfo,
  imageSrc,
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
    <div className={cx(className, "grid grid-cols-12")}>
      <Text
        text={title}
        className={"text-white col-span-12 flex justify-center text-5xl py-10"}
        data-aos="zoom-in-up"
      />

      <div
        className={
          "col-span-12 xl:col-span-6 flex flex-col items-center text-start pb-10 xl:pb-0"
        }
        data-aos="zoom-in-up"
      >
        {contactInfo.map((element) => {
          return (
            <Text
              text={`${element.title}: ${element.value}`}
              className={
                "text-white text-center text-2xl xl:text-3xl p-2 xl:p-5"
              }
            />
          );
        })}
      </div>

      <div
        className={
          "hidden xl:flex col-span-6 justify-center items-center py-10"
        }
        data-aos="zoom-in-up"
      >
        <Image className={"w-1/2 h-auto"} src={imageSrc} alt={"instagram"} />
      </div>
    </div>
  );
};
