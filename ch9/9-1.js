// 예제 1
const parimeter = 2 * (height + width);
console.log(parimeter);
const area = height * width;
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * scenario.delay;
    const secondartAcc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondartAcc * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = inputValue - 2;
  if (quantity > 100) result = inputValue - 1;
  return result;
}
