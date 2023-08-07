/*

문제 [3]

은행 계좌 클래스 만들기
다음은 은행 계좌를 나타내는 클래스를 만들어야 합니다. 
클래스에는 다음과 같은 기능들이 있어야 합니다.

1. 계좌 개설 시, 예금주의 이름과 초기 잔액을 입력받아 계좌를 개설합니다.
2. 입금 기능을 제공합니다.
3. 출금 기능을 제공합니다. 단, 잔액 이상으로 출금할 수 없습니다.
4. 현재 잔액을 조회하는 기능을 제공합니다.
*/

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  getBalance() {
    return `현재 잔액은 ${this.balance.toLocaleString()} 입니다.`;
  }
  deposit(amount) {
    if (amount <= 0) {
      return "입금할 금액은 0보다 커야 합니다.";
    }
    this.balance += amount;
    return `${amount.toLocaleString()}원 입금되었습니다. 현재 잔액은 ${this.balance.toLocaleString()}입니다.`;
  }
  withdraw(amount) {
    if (amount <= 0) {
      return "출금할 금액은 0보다 커야합니다.";
    }
    if (amount > this.balance) {
      return "잔액 이상으로 출금할 수 없습니다.";
    }
    this.balance -= amount;
    return `${amount.toLocaleString()}원 출금되었습니다. 현재 잔액은 ${this.balance.toLocaleString()}입니다.`;
  }
}

const myAccount = new BankAccount("Nami", 53709000); // 계좌 개설, 예금주의 이름과 초기 잔액 입력

export { myAccount };
