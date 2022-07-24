export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}
class UnKnownCustomer extends Customer {
  // eslint-disable-next-line class-methods-use-this
  get name() {
    return 'occupant';
  }
}
export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new UnKnownCustomer()
      : new Customer(this._customer);
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;

  return customerName;
}
