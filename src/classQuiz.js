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

정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자.
직원들의 정보: 이름, 부서이름, 한달 근무 시간
매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다.
정직원은 시간당 20,000원
파트타임 직원은 시간당 9,620원(2023 최저시급)이다.
*/

/*
혼자 스스로 해본 답안.

class Worker {
  #name;
  #part;
  #time;
  constructor(name, part, time) {
    this.#name = name;
    this.#part = part;
    this.#time = time;
  }
  get name() {
    return this.#name;
  }
  get part() {
    return this.#part;
  }
  get time() {
    return this.#time;
  }
}

class publicWorker extends Worker {
  Salary = () => {
    console.log(
      `이번 달 ${this.part}부서 ${this.name}님의 월급은 ${(
        this.time * 20000
      ).toLocaleString()}원 입니다.`
    );
  };
}

class partWorker extends Worker {
  Salary = () => {
    console.log(
      `이번 달 ${this.part}부서의 ${this.name}님의 월급은 ${(
        this.time * 9620
      ).toLocaleString()}원 입니다.`
    );
  };
}

const worker = new publicWorker("Nami", "IT", 300);
const worker1 = new partWorker("Olive", "Design", 100);
console.log(worker.name); // nami
console.log(worker.part); // online
console.log(worker.time); // 300
worker.Salary(); // 6,000,000원
console.log(worker1.name); // olive
console.log(worker1.part); // design
console.log(worker1.time); // 100
worker1.Salary(); // 962,000원

*/

class Worker {
  constructor(name, part, time, payRate) {
    this.name = name;
    this.part = part;
    this.time = time;
    this.payRate = payRate;
  }
  Salary = () => {
    const salary = (this.time * this.payRate).toLocaleString();
    console.log(
      `이번 달 ${this.part}부서 ${this.name}님의 월급은 ${salary}원 입니다.`
    );
  };
}

class PublicWorker extends Worker {
  static PAY_RATE = 20000;
  constructor(name, part, time) {
    super(name, part, time, PublicWorker.PAY_RATE);
  }
}

class PartWorker extends Worker {
  static PAY_RATE = 9620;
  constructor(name, part, time) {
    super(name, part, time, PartWorker.PAY_RATE);
  }
}

const worker = new PublicWorker("Nami", "IT", 300);
const worker1 = new PartWorker("Olive", "Design", 100);

export { quizcounter, worker, worker1 };
