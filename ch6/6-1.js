function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  // eslint-disable-next-line no-return-assign
  return invoice.orders.reduce((sum, order) => sum += order.amount, 0);
}

function recordDueDate(invoice, today) {
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

export default function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice);

  const today = new Date();
  recordDueDate(invoice, today);

  printDetails(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
