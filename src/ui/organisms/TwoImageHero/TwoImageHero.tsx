import { FC } from "react";
import Image from "@/ui/atoms/Image/Image.tsx";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
import { Text } from "@/ui/atoms/Text";

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
  const images = [image1, image2];

  return (
    <div className={className}>
      <Text
        text={title}
        className={"text-white flex justify-center py-10 text-3xl xl:text-5xl"}
      />

      <div className={cx("grid grid-cols-12")}>
        {images.map((imageSrc) => (
          <div
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
