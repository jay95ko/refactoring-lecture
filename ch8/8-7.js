function youngestAge(people) {
  return Math.min(...people.map((p) => p.age));
}

function totalSalary(people) {
  return people.reduce((total, p) => (total += p.salary), 0);
}

export function reportYoungestAgeAndTotalSalary(people) {
  const youngest = youngestAge(people);
  // eslint-disable-next-line no-shadow
  const totalSalary = totalSalary(people);

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
