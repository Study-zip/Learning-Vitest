// 빌트인 객체 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = "Hello World!";
const printedCharacters = [];

for (let i = 0; i < text.length; i++) {
  printedCharacters.push(text.charAt(i));
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";

export { text, printedCharacters, ids };
