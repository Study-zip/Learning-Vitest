// 1초에 한번씩 시계를 (날짜포함) 출력해보자.
function startClock() {
  const intervalID = setInterval(whatTime, 1000);

  function whatTime() {
    const now = new Date();
    console.log(now);
  }
}

export { startClock };
