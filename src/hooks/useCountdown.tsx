import { useEffect, useState } from "react";

export type ClockValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): ClockValues => ({
  days: Math.floor(countDown / (1000 * 60 * 60 * 24)),
  hours: Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes: Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
  seconds: Math.floor((countDown % (1000 * 60)) / 1000),
});
