import { test, it, expect } from "vitest";
import { quizcounter, worker, worker1 } from "../classQuiz";

test("주어진 퀴즈의 정답을 카운트하는 Class 테스트", () => {
  expect(quizcounter.getScore).toBe(1);
});

test("한 달 월급을 계산하는 Class 테스트", () => {
  it("정직원 월급 계산하기", () => {
    expect(worker.Salary).toBe("6,000,000");
  });
  it("파트타임 직원 월급 계산하기", () => {
    expect(worker1.Salary).toBe("962,000");
  });
});
