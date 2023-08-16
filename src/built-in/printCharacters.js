// 문자열의 모든 캐릭터를 하나씩 출력하라
const text = "Hello World!";
const printedCharacters = [];

for (let i = 0; i < text.length; i++) {
  printedCharacters.push(text.charAt(i));
}

export { text, printedCharacters };
