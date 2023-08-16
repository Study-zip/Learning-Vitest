import { test, expect, vi } from "vitest";
import { startClock } from "../../built-in/clock";

test("1초마다 날짜와 시간 출력하기", async () => {
  vi.useFakeTimers();

  const consoleOutput = [];
  console.log = (message) => {
    consoleOutput.push(message);
  };

  const clockPromise = startClock();
  vi.advanceTimersByTime(1000);

  await clockPromise;

  const expectedOutput = [new Date().toString()];
  const receivedOutput = consoleOutput.map((date) => new Date(date).toString());

  expect(receivedOutput).toEqual(expectedOutput);

  vi.useRealTimers();
});
