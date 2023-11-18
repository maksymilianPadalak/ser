import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
import { DetailsBlock } from "@/ui/organisms/HeroBackgroundImage/components/DetailsBlock/DetailsBlock.tsx";

type HeroBackgroundImageProps = {
  title: string;
  description: string;
  imageUrl: string;
} & ComponentWithClassNameProps;

export const HeroBackgroundImage: FC<HeroBackgroundImageProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => (
  <div
    className={cx(
      "w-full h-screen bg-cover bg-center flex items-center justify-center",
      className,
    )}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <DetailsBlock title={title} description={description} className={"w-700"} />
  </div>
);
