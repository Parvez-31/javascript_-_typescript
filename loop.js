// TOPIC: -> for loop
for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// for of loop
let fruits = ["apple", "bannana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// for in loop
const user = {
  userName: "parvez",
  password: 123456,
  village: "basirhat",
};

for (let key in user) {
  console.log(key);
}

for (let number = 0; number <= 12; number = number + 3) {
  console.log(number);
}

// while loop

let i = 0;
while (i <= 5) {
  // console.log(i);
  i++;
}

let result = 1;

for (let counter = 0; counter < 10; counter++) {
  console.log((result = result * 2));
}

// console.log(result);

// break
for (let current = 20; ; current = current + 1) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}

// continue
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

for (let count = 0; count <= 12; count += 2) {
  console.log(count);
}

// TOPIC: ->  While loop
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

// -----------------

let counter = 0;
let res = 1;
while (counter < 10) {
  res = res * 2;
  console.log(res);
  counter++;
}

// TOPIC: -> Do While loop

let yourName;
do {
  // yourName = prompt("Who are you?");
} while (yourName);
{
  console.log(`Hello ${yourName}`);
}

// ----------------
if (false !== true) {
  console.log("That's makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
