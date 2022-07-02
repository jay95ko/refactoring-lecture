// 예제 1
// eslint-disable-next-line import/prefer-default-export
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name], ['location', customer.location]);
  return lines;
}
