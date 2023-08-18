import { test, expect } from "vitest";
import { total } from "../../array/countArray";

test("배열안에 그 요소가 몇개나 있는지 카운트 하기", () => {
  expect(total).toBe(2);
});
