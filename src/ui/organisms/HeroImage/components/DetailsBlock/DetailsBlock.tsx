import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { DetailsSection } from "./components/DetailsSection/DetailsSection.tsx";

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
      textClassName={"text-5xl text-white"}
    />
    <DetailsSection
      text={description}
      className={"bg-white"}
      textClassName={"hidden xl:block text-3xl text-yellow-400 text-center"}
    />
  </div>
);
