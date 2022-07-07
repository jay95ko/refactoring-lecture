class Priority {
  #value;
  constructor(value) {
    if(Priority.legalValues().includes(value)) {
      this.#value = value
    } else {
      throw new Error('value Error');
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value)
  }
}

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  checkPriority() {
    return this.priority === 'high' || this.priority === 'rush';
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => o.checkPriority(),
).length;
