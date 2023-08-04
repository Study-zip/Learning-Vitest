import { test, expect } from 'vitest';
import { counter } from '../class';

test('Class 응용 예제 - 방문자 수 카운트 기능', () => {
  expect(counter.value).toBe(2);
});
