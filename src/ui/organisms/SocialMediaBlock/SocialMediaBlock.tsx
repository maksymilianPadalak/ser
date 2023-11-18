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
        textClassName={"text-4xl"}
        className={"flex justify-center my-5"}
      />
      <div className={"grid grid-cols-12"}>
        {images.map((imageSrc) => (
          <div className={"col-span-4 m-10"}>
            <Image src={imageSrc} alt={"instagram"} />
          </div>
        ))}
      </div>
    </div>
  );
};
