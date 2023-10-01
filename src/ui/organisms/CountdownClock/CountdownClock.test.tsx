import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CountdownClock } from "./CountdownClock.tsx";
import { TimeUnits } from "@/ui/organisms/CountdownClock/enums.ts";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

describe("CountdownClock", () => {
  const date = new Date("2020-01-01");
  jest.useFakeTimers().setSystemTime(new Date(date));

  it("should render component with days, hours, minutes and seconds left", () => {
    date.setDate(date.getDate() + 1);
    date.setHours(date.getHours() + 2);
    date.setMinutes(date.getMinutes() + 3);
    date.setSeconds(date.getSeconds() + 4);

    render(<CountdownClock targetDate={date} />);

    Object.keys(TimeUnits).forEach((unit) => {
      expect(screen.getByText(capitalizeFirstLetter(unit))).toBeInTheDocument();
    });

    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
  });
});
