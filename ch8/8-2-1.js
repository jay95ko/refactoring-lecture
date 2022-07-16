export class Customer {
  #name;
  #contract;
  constructor(name, contract) {
    this.#name = name;
    this.#contract = contract;
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#discountRate = discountRate;
    this.#startDate = startDate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(value) {
    return this.#discountRate = value;
  }
}
