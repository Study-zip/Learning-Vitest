import { describe, expect, it } from 'vitest';
import { object } from '../App';

describe('객체 리터럴 테스트', () => {
  it('마침표 표기법', () => {
    expect(object.person.name).toBe('nami');
    expect(object.person.emoji).toBe('🩵');
  });

  it('대괄호 표기법', () => {
    expect(object.person['default-mode']).toBe('😃');
    expect(object.person[0]).toBe(1);
    expect(object.person['study-mode']).toBe('🤓');
    expect(object.person['emoji']).toBe('🩵');
  });
});

describe('객체 동적으로 접근하기', () => {
  it('대괄호 표기법', () => {
    expect(object.getValue(object.obj, 'name')).toBe('nami');
  });
});
