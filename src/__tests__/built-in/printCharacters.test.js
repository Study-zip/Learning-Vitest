import { test, expect } from "vitest";
import { text, printedCharacters } from "../../built-in/printCharacters";

test("문자열의 모든 캐릭터를 하나씩 출력하라", () => {
  expect(printedCharacters.join("")).toBe(text);
});
