// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]
const charTwiceRepeat = function (char) {
  return char.repeat(2);
};

const makeWordsLettersDouble = function (string) {
  return [...string].map(charTwiceRepeat).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(makeWordsLettersDouble);
};

// console.log(doubleLettersOf(["hello", "lucknow", "upperCase", "delhi"]));
// console.log(doubleLettersOf(["hello", "lucknow", "", "delhi"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isAVowel = function (alphabet) {
  const allVowels = "aeiouAEIOU";

  return allVowels.includes(alphabet);
};

const countIfAVowel = function (vowelCount, alphabet) {
  return isAVowel(alphabet) ? vowelCount + 1 : vowelCount;
};

const vowelCount = function (word) {
  const wordArray = [...word];

  return wordArray.reduce(countIfAVowel, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(vowelCount);
};

// console.log(countVowelsOf(["apple", "banana", "grape"]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const addLetters = function (word, letterToAdd) {
  return isAVowel(letterToAdd) ? word : word + letterToAdd;
};

const removeVowel = function (word) {
  return [...word].reduce(addLetters, "");
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowel);
};

// console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) {
  const totalSum = numbers.reduce(function (sum, num) { return sum + num; }, 0);

  return numbers.map(function (score) { return score * 100 / totalSum; });
};

// console.log(percentageContributions([10, 20, 30]));

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const normalizeStringLengths = function (strings) {
  const maxLength = strings.reduce(function (maxLength, string) {
    return maxLength > string.length ? maxLength : string.length;
  });

  return strings.map(function (string) { return string.padEnd(maxLength, " "); });
};

// console.log(normalizeStringLengths(["cat", "elephant", "dog"]));