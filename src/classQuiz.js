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

/*

문제 [2]

사용자의 이름과 나이 정보를 저장하는 클래스 User를 만들어보세요. User 클래스는 다음과 같은 기능을 갖추어야 합니다.

1. 사용자의 이름과 나이를 설정할 수 있어야 합니다. 이때 나이는 0 이상이어야 합니다.
2. get 키워드를 사용하여 사용자의 이름과 나이를 가져올 수 있어야 합니다.
3. set 키워드를 사용하여 사용자의 이름과 나이를 변경할 수 있어야 합니다. 나이가 0 미만으로 변경되는 경우, 자동으로 0으로 설정되어야 합니다.
*/

// const user = new User();

export { quizcounter };
