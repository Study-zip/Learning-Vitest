// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const array1 = ["🍌", "🥝", "🍇"];
const array2 = ["🍌", "🍓", "🍇", "🍓"];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    continue;
  } else {
    array1.splice(i, 1);
  }
}

export { array1 };
