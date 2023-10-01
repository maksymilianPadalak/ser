import { capitalizeFirstLetter } from "./capitalizeFirstLetter.ts";

describe("capitalizeFirstLetter", () => {
  it("should return string passed as argument with capitalized first letter", () => {
    expect(capitalizeFirstLetter("test")).toEqual("Test");
  });
});
