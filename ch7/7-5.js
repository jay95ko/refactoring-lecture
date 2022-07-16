class Person {
  #name;
  #telephoneNumber;
  constructor(name, telephoneNumber) {
    this.#name = name;
    this.#telephoneNumber = telephoneNumber;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #officeNumber;

  constructor(areaCode, number) {
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

const telephoneNumber = new TelephoneNumber('010', '12345678')
const person = new Person('엘리', telephoneNumber);
console.log(person.name);
console.log(person.telephoneNumber.officeAreaCode);
console.log(person.telephoneNumber.officeNumber);
console.log(person.telephoneNumber.telephoneNumber);
