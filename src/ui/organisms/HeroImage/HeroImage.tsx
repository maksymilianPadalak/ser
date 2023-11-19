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
    <div className={"col-span-6 flex justify-center items-end pt-6"}>
      <Image src={imageUrl} alt={"sir"} />
    </div>
    <div className={"col-span-6 flex justify-center items-center"}>
      <DetailsBlock
        title={title}
        description={description}
        className={"w-300"}
      />
    </div>
  </div>
);
