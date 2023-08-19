import { test, expect } from "vitest";
import { avgAboveFive } from "../../array/avgArray";

test("5 이상 요소들의 평균 구하기 ", () => {
  const input = [3, 16, 5, 25, 4, 34, 21];
  expect(avgAboveFive(input)).toBe(24);
});
