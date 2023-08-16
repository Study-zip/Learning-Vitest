import { test, expect } from "vitest";
import { myAccount } from "../../class/classQuiz3";

test("문제 [3] 은행 계좌 입출금하기 테스트", () => {
  expect(myAccount.getBalance()).toBe("현재 잔액은 53,709,000 입니다.");
  expect(myAccount.deposit(0)).toBe("입금할 금액은 0보다 커야 합니다.");
  expect(myAccount.withdraw(0)).toBe("출금할 금액은 0보다 커야합니다.");
  expect(myAccount.deposit(1680000)).toBe(
    "1,680,000원 입금되었습니다. 현재 잔액은 55,389,000입니다."
  );
  expect(myAccount.withdraw(700000000000)).toBe(
    "잔액 이상으로 출금할 수 없습니다."
  );
  expect(myAccount.withdraw(700000)).toBe(
    "700,000원 출금되었습니다. 현재 잔액은 54,689,000입니다."
  );
});
