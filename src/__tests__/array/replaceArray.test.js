import { test, expect } from "vitest";
import { replace } from "../../array/replaceArray";

const array = ["🍌", "🍓", "🍇", "🍓"];
const replaced = replace(array, "🍓", "🥝");

test("주어진 배열 확인", () => {
  expect(array).toStrictEqual(["🍌", "🍓", "🍇", "🍓"]);
});

test("새 배열 만들기", () => {
  expect(replaced).toStrictEqual(["🍌", "🥝", "🍇", "🥝"]);
});
