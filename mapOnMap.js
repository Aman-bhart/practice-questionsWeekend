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