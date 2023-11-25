import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import Image from "@/ui/atoms/Image/Image.tsx";
import { HeadingWithText } from "@/ui/molecules/HeadingWithText";

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
  const images: string[] = [image1, image2, image3];

  return (
    <div className={className}>
      <HeadingWithText
        heading={title}
        text={description}
        headingClassName={"text-5xl xl:text-7xl mb-5"}
        textClassName={"text-3xl"}
        className={"flex justify-center my-5 text-center"}
      />
      <div className={"grid grid-cols-12"}>
        {images.map((imageSrc) => (
          <div className={"col-span-12 xl:col-span-4 xl:m-10"}>
            <Image src={imageSrc} alt={"instagram"} />
          </div>
        ))}
      </div>
    </div>
  );
};
