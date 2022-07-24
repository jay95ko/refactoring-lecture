function isNotEligibleForDisability(employee) {
  return employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime;
}

function disabilityAmount(employee) {
  return isNotEligibleForDisability(employee) ? 0 : 1;
}
