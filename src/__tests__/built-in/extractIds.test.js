import { test, expect } from "vitest";
import { ids } from "../../built-in/extractIds";

test("각각의 id를 배열로 보관하기", () => {
  expect(ids.split(", ")).toStrictEqual(["user1", "user2", "user3", "user4"]);
});
