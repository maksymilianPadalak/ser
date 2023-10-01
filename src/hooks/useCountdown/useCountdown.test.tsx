import { renderHook } from "@testing-library/react";
import { useCountdown } from "./useCountdown.tsx";

describe("useCountdown", () => {
  const date = new Date("2020-01-01");
  jest.useFakeTimers().setSystemTime(new Date(date));

  it("should render the correct time remaining", () => {
    date.setDate(date.getDate() + 1);
    date.setHours(date.getHours() + 2);
    date.setMinutes(date.getMinutes() + 3);
    date.setSeconds(date.getSeconds() + 4);

    const { result } = renderHook(() => useCountdown(new Date(date)));
    expect(result.current.days).toBe(1);
    expect(result.current.hours).toBe(2);
    expect(result.current.minutes).toBe(3);
    expect(result.current.seconds).toBe(4);
  });
});
