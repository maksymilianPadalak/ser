import { FC } from "react";
import { ComponentWithClassNameProps } from "@/globalTypes";
import { Text } from "@/ui/atoms/Text";
import cx from "classnames";
import Image from "@/ui/atoms/Image/Image.tsx";

type ContactBlockProps = {
  telephone: string;
  email: string;
  imageSrc: string;
} & ComponentWithClassNameProps;

export const ContactBlock: FC<ContactBlockProps> = ({
  telephone,
  email,
  imageSrc,
  className,
}) => {
  return (
    <div className={cx(className, "grid grid-cols-12")}>
      <Text
        text={"Contact us"}
        className={"col-span-12 flex justify-center text-5xl py-10"}
      />

      <div className={"col-span-6 flex justify-center flex-col items-center"}>
        <Text text={`telephone: ${telephone}`} className={"text-3xl p-5"} />
        <Text text={`email: ${email}`} className={"text-3xl p-5"} />
        <Text text={`Telephone: ${telephone}`} className={"text-3xl p-5"} />
      </div>

      <div className={"col-span-6 flex justify-center items-center py-10"}>
        <Image className={"w-1/2 h-auto"} src={imageSrc} alt={"instagram"} />
      </div>
    </div>
  );
};
