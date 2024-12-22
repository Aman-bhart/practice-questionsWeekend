// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractValue = function (keys) {
  return function (object) {
    return object[keys];
  };
};

const extractNames = function (objects) {
  return objects.map(extractValue("name"));
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));


// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map(extractValue("age"));
};

// console.log(extractAges([{ age: 25 }, { age: 30 }]));


// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLetter = function (word) {
  return word.at(0) || "";
};

const firstLettersOfNames = function (objects) {
  return objects.map(extractValue("name")).map(firstLetter);
};

// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));
// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "" }]));


// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const evaluateArea = function (dimension) {
  return extractValue("width")(dimension) * extractValue("height")(dimension);
};

const calculateAreas = function (rectangles) {
  return rectangles.map(evaluateArea);
};

// console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));


// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map(extractValue("active"));
};

// console.log(extractFlags([{ active: true }, { active: false }]));


// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]

const concateFirstAndLast = function (object) {
  return object.firstName.concat(" " + object.lastName);
};

const fullNames = function (objects) {
  return objects.map(concateFirstAndLast);
};

// console.log(fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]));


// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const calculatePrice = function (object) {
  return object.price * object.quantity;
};

const totalPrices = function (objects) {
  return objects.map(calculatePrice);
};

// console.log(totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]));


// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map(function (object) { return object.age >= 18; });
};

// console.log(isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]));


// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const filterUpperCase = function (string) {
  return [...string].filter(function (char) {
    return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
  }).join("");
};

const createAbbreviation = function (object) {
  let abbre = filterUpperCase(object.city);
  abbre += ", " + filterUpperCase(object.country);
  return abbre;
};

const abbreviations = function (objects) {
  return objects.map(createAbbreviation);
};

// console.log(abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(function (object) { return object.scores.math; });
};

// console.log(mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map(function (object) { return [object.x, object.y]; });
};

// console.log(extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]));


// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map(function (object) {
    return [concateFirstAndLast(object), object.age];
  });
};

// console.log(fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]));


// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(function (object) { return [object.scores.math, object.scores.english]; });
};

// console.log(extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));


// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map(function (object) { return [object.key, object.value]; });
};

// console.log(keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]));


// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map(function (object) { return object.name.split(" "); });
};

// console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));


// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) {
  return objects.map(function (object) { return object.score / 100; });
};

// console.log(normalizeScores([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }]));