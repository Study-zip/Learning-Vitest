import { test, expect } from "vitest";
import { text, printedCharacters, ids } from "../built-in/built-inQuiz0";

test("문자열의 모든 캐릭터를 하나씩 출력하라", () => {
  expect(printedCharacters.join("")).toBe(text);
});

test("각각의 id를 배열로 보관하기", () => {
  expect(ids.split(", ")).toStrictEqual(["user1", "user2", "user3", "user4"]);
});
