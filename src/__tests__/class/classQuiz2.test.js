import { test, it, expect } from "vitest";
import { worker, worker1 } from "../../class/classQuiz2";

test("정직원 월급 계산", () => {
  expect(worker.Salary().toLocaleString()).toBe("6,000,000");
});
test("파트타임 월급 계산", () => {
  expect(worker1.Salary().toLocaleString()).toBe("962,000");
});
