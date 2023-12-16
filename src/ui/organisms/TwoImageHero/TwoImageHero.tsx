import { FC, useEffect } from "react";
import Image from "@/ui/atoms/Image/Image.tsx";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
import { Text } from "@/ui/atoms/Text";
import AOS from "aos";

type TwoImageHeroProps = {
  image1: string;
  image2: string;
  title: string;
} & ComponentWithClassNameProps;

export const TwoImageHero: FC<TwoImageHeroProps> = ({
  image1,
  image2,
  title,
  className,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images = [image1, image2];

  return (
    <div className={className}>
      <Text
        text={title}
        className={
          "text-white text-center flex justify-center py-10 text-3xl xl:text-5xl"
        }
        data-aos={"fade-up"}
      />

      <div className={cx("grid grid-cols-12")}>
        {images.map((imageSrc, index) => (
          <div
            key={imageSrc}
            data-aos={index % 2 ? "fade-left" : "fade-right"}
            className={
              "col-span-12 xl:col-span-6 m-10 flex justify-center items-center"
            }
          >
            <Image src={imageSrc} alt={"instagram"} />
          </div>
        ))}
      </div>
    </div>
  );
};
