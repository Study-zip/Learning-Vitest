// Quiz
// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  // 외부에선 확인할 수 없음.
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  // 방문자 수를 확인할 수 있게 get 정의
  get value() {
    return this.#value;
  }
  //  방문자가 증가하도록 하는 함수 increment
  increment = () => {
    this.#value++;
  };
}
const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2

export { counter };
