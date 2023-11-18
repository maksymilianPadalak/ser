import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import cx from "classnames";
import { Text } from "@/ui/atoms/Text";

type DetailsSectionProps = {
  text: string;
  textClassName?: string;
} & ComponentWithClassNameProps;

export const DetailsSection: FC<DetailsSectionProps> = ({
  text,
  textClassName,
  className,
}) => (
  <div className={cx("bg-black flex justify-center", className)}>
    <Text text={text} className={cx("p-6", textClassName)} />
  </div>
);
