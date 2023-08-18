// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const fruits = ["🍌", "🍓", "🍇", "🍓"];
const newFruits = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] !== "🍓") {
    newFruits.push(fruits[i]);
  } else {
    newFruits.push("🥝");
  }
}

export { fruits, newFruits };
