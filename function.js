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
