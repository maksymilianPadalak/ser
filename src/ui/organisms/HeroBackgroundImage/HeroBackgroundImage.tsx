import { FC } from "react";
import { Heading } from "@/ui/atoms/Heading";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";

type HeroBackgroundImageProps = {
  title: string;
  imageUrl: string;
} & ComponentWithClassNameProps;

export const HeroBackgroundImage: FC<HeroBackgroundImageProps> = ({
  title,
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
    <Heading text={title} />
  </div>
);
