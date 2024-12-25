const range = function (start, end, step) {
  const arr = [];

  for (let term = start; term <= end; term += step) {
    arr.push(term);
  }

  return arr;
};

const sum = (a, b) => a + b;

const isLeap = (year) =>
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

const getDaysOfYear = (year) => (isLeap(year) ? 366 : 365);

const getPreviousMonthsDays = function (month, year) {
  const febDay = isLeap(year) ? 29 : 28;
  const monthArray = [31, febDay, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return monthArray
    .filter((days, monthIndex) => monthIndex < month - 1)
    .reduce(sum, 0);
};

const getNumOfDays = function (date, referenceYear = 2024) {
  const [year, month, days] = date.split("-").map((element) => +element);

  const yearDiffArray = range(referenceYear, year - 1, 1);

  const noOfDays =
    yearDiffArray.map(getDaysOfYear).reduce(sum, 0) +
    getPreviousMonthsDays(month, year) +
    days;

  return noOfDays;
};
