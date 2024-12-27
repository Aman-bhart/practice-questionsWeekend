export const sum = (a, b) => a + b;

export const product = (a, b) => a * b;

export const getMinimum = (a, b) => (a > b ? b : a);

export const getMaximum = (a, b) => (a > b ? a : b);

export const isPositive = (num) => num > 0;

export const isEven = (num) => !(num & 1);

export const concString = (str1, str2) => str1.concat(str2);

export const maxLengthWord = (word1, word2) =>
  word1.length >= word2.length ? word1 : word2;
