import { FC, useEffect } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import Image from "@/ui/atoms/Image/Image.tsx";
import AOS from "aos";

type ContactBlockProps = {
  telephone: string;
  email: string;
  imageSrc: string;
} & ComponentWithClassNameProps;

export const ContactBlock: FC<ContactBlockProps> = ({
  telephone,
  email,
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
        text={"Contact us"}
        className={"col-span-12 flex justify-center text-5xl py-10"}
        data-aos="zoom-in-up"
      />

      <div
        className={
          "col-span-12 xl:col-span-6 flex justify-center flex-col items-center text-center pb-10 xl:pb-0"
        }
        data-aos="zoom-in-up"
      >
        <Text
          text={`telephone: ${telephone}`}
          className={"text-2xl xl:text-3xl p-2 xl:p-5"}
        />
        <Text
          text={`email: ${email}`}
          className={"text-2xl xl:text-3xl p-2 xl:p-5"}
        />
        <Text
          text={`Telephone: ${telephone}`}
          className={"text-2xl xl:text-3xl p-2 xl:p-5"}
        />
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
