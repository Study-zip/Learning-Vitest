/* 
GPT가 내준 퀴즈
클래스를 활용한 테스트 코드

문제 [1]

주어진 퀴즈의 정답을 카운트하는 클래스 `QuizCounter`를 만들어보세요.
`QuizCounter` 클래스는 다음과 같은 기능을 갖추어야 합니다.

1. QuizCounter 클래스는 생성자를 통해 초기 정답 개수를 설정할 수 있어야 합니다.
2. increment() 메서드를 호출하면 정답 개수가 1씩 증가되어야 합니다.
3. getScore() 메서드를 호출하면 현재까지의 정답 개수를 반환해야 합니다.

*/

class QuizCounter {
  #correct;
  constructor(count) {
    if (isNaN(count) || count < 0) {
      this.#correct = 0; // count = 0을 해버림
    } else {
      this.#correct = count;
    }
  }
  increment = () => {
    // get increment를 해버림
    this.#correct++;
  };
  get getScore() {
    return this.#correct; // console.log를 써버림, 함수로 선언해버림.
  }
}

const quizcounter = new QuizCounter(0);
quizcounter.increment(); // 정답 개수가 1씩 증가되어야 한다.

export { quizcounter };
