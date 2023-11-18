import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
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
    <div>
      <HeadingWithText
        heading={title}
        text={description}
        textClassName={"text-4xl"}
        className={"flex justify-center my-5"}
      />
      <div className={cx("grid grid-cols-12", className)}>
        {images.map((imageSrc) => (
          <div className={"col-span-4 m-10"}>
            <Image src={imageSrc} alt={"instagram"} />
          </div>
        ))}
      </div>
    </div>
  );
};
