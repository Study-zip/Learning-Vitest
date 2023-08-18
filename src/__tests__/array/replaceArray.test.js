import { test, it, expect } from "vitest";
import { fruits, newFruits } from "../../array/replaceArray";

test("주어진 배열 수정 없이 내부 아이템 교체해서 새 배열 만들기", () => {
  it("주어진 배열 확인", () => {
    expect(fruits).toStrictEqual(["🍌", "🍓", "🍇", "🍓"]);
  });
  it("새 배열 확인", () => {
    expect(newFruits).toStrictEqual(["🍌", "🥝", "🍇", "🥝"]);
  });
});
