import { FC, useEffect } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import Image from "@/ui/atoms/Image/Image.tsx";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";
import AOS from "aos";

type SocialMediaBlockProps = {
  title: string;
  description: string;
  image: string;
} & ComponentWithClassNameProps;

export const SocialMediaBlock: FC<SocialMediaBlockProps> = ({
  title,
  description,
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
    <div className={className}>
      <HeadingWithText
        heading={title}
        text={description}
        headingClassName={
          "text-white text-center flex justify-center py-10 text-3xl xl:text-5xl"
        }
        textClassName={"text-3xl text-white"}
        className={"flex justify-center my-5 text-center"}
        data-aos={"fade-up"}
        data-aos-delay={500}
      />
      <div className={"grid grid-cols-12 pb-10"}>
        <Image
          src={image}
          alt={"instagram"}
          className={"col-span-12 xl:m-10"}
          data-aos={"fade-right"}
        />
      </div>
    </div>
  );
};
