import { FC } from "react";

type ClockDigitProps = {
  digit: number;
};

export const ClockDigit: FC<ClockDigitProps> = ({ digit }) => {
  return <div>{digit}</div>;
};
