function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    switch (people[i]) {
      case 'Don':
        return 'Don';
      case 'John':
        return 'John';
      case 'Kent':
        return 'Kent';
    }
  }
  return '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
