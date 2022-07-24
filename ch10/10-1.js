const isSummer = (date, plan) => {
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)
}

function summerCharge(quantity, plan) {
  return quantity * plan.summerRate;
}

function regularCharge(quantity, plan) {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

function calculateCharge(date, quantity, plan) {
  return isSummer(date, plan)
    ? summerCharge(quantity, plan)
    : regularCharge(quantity, plan);
}
