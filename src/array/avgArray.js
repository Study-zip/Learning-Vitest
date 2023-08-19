// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

function avgAboveFive(nums) {
  return nums
    .filter((num) => num > 5)
    .reduce((avg, num, _, array) => avg + num / array.length, 0);
}

export { avgAboveFive };
