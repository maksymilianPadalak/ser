import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { DetailsSection } from "@/ui/organisms/HeroBackgroundImage/components/DetailsBlock/components/DetailsSection/DetailsSection.tsx";

type DetailsBlockProps = {
  title: string;
  description: string;
} & ComponentWithClassNameProps;

export const DetailsBlock: FC<DetailsBlockProps> = ({
  title,
  description,
  className,
}) => (
  <div className={className}>
    <DetailsSection
      text={title}
      className={"bg-yellow-400 flex justify-center"}
    />
    <DetailsSection
      text={description}
      textClassName={"text-white text-center"}
    />
  </div>
);
