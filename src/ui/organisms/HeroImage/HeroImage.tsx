import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
import Image from "@/ui/atoms/Image/Image.tsx";
import { DetailsBlock } from "./components/DetailsBlock/DetailsBlock.tsx";

type HeroBackgroundImageProps = {
  title: string;
  description: string;
  imageUrl: string;
} & ComponentWithClassNameProps;

export const HeroImage: FC<HeroBackgroundImageProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => (
  <div className={cx("grid grid-cols-12", className)}>
    <div
      className={
        "col-span-12 xl:col-span-6 flex justify-center items-center order-1 xl:order-2"
      }
    >
      <DetailsBlock
        title={title}
        description={description}
        className={"w-100 xl:w-300"}
      />
    </div>
    <div
      className={
        "col-span-12 xl:col-span-6 flex justify-center items-end pt-6 order-2 xl:order-1"
      }
    >
      <Image src={imageUrl} alt={"sir"} />
    </div>
  </div>
);
