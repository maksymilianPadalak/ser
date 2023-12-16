import { FC, useEffect } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import Image from "@/ui/atoms/Image/Image.tsx";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";
import AOS from "aos";

type SocialMediaBlockProps = {
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
} & ComponentWithClassNameProps;

export const SocialMediaBlock: FC<SocialMediaBlockProps> = ({
  title,
  description,
  image1,
  image2,
  image3,
  className,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images: string[] = [image1, image2, image3];

  return (
    <div className={className}>
      <HeadingWithText
        heading={title}
        text={description}
        headingClassName={"text-5xl xl:text-7xl mb-5"}
        textClassName={"text-3xl"}
        className={"flex justify-center my-5 text-center"}
        data-aos={"fade-up"}
        data-aos-delay={500}
      />
      <div className={"grid grid-cols-12"}>
        {images.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={"col-span-12 xl:col-span-4 xl:m-10"}
            data-aos={"fade-right"}
            data-aos-delay={200 * index}
          >
            <Image src={imageSrc} alt={"instagram"} />
          </div>
        ))}
      </div>
    </div>
  );
};
