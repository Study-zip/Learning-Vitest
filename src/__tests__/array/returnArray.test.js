import { test, expect } from "vitest";
import { match } from "../../array/returnArray";

test("두개의 배열을 전달받아, 배열2에 존재하는 아이템만 담고 있는 배열 반환", () => {
  expect(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"])).toStrictEqual([
    "🍌",
    "🍇",
  ]);
});
