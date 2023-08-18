import { describe, test, expect } from "vitest";
import { replace } from "../../array/replaceArray";

const array = ["🍌", "🍓", "🍇", "🍓"];
const replaced = replace(array, "🍓", "🥝");

describe("주어진 배열 수정 없이 내부 아이템 교체해서 새 배열 만들기", () => {
  test("주어진 배열 확인", () => {
    expect(array).toStrictEqual(["🍌", "🍓", "🍇", "🍓"]);
  });
  test("새 배열 확인", () => {
    expect(replaced).toStrictEqual(["🍌", "🥝", "🍇", "🥝"]);
  });
});
