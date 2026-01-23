// One parameter
const square = function (x) {
  return x * x;
};

console.log(square(12));

// No parameter
const makeNoise = function () {
  console.log("Pling!");
};

makeNoise();

// Multiple parameter
const roundTo = function (n, step) {
  let remainder = n % step; // 3
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));

// console.log(23 % 10);

// Binding and scopes
const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
console.log(n);

// Nested scope

// Lexical Scoping মানে:

//কোন ভেরিয়েবল কোথায় থাকবে,    সেটা ঠিক হয় কোড কোথায় লেখা হয়েছে তার উপর, function কখন call হলো তার উপর না।

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit = unit + "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");

  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "grlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(50);
