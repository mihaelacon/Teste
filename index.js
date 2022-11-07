//--------------------------------

function doSomething(value) {
  console.info("the value is: " + value);
  if (!value) {
    console.info("you did not provide the value");
  }
}

doSomething("sir");
const obj = {
  text: "yes",
  yes: "text",
};
let key = "text";
// console.info(obj);
console.info(obj.text);
console.info(obj.yes);
console.info(obj["text"]);
console.info(obj["yes"]);
console.info(obj.key);
console.info(obj[key]);

// VM5789:2 the value is: sir
// VM5789:15 yes
// VM5789:16 text
// VM5789:17 yes
// VM5789:18 text
// VM5789:19 undefined
// VM5789:20 yes
// undefined

//---------------------------------

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.info(i);
  }, 100);
}

// VM5730:1 0
// VM5730:1 1
// VM5730:1 2
// VM5730:1 3
// VM5730:1 4

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.info(i);
  }, 100);
}

// 5VM6227:3 5

//---------------------------------

function calc(n) {
  if (n < 1) return 0;
  return n + calc(n - 1);
}
console.info(calc(5));

// VM5793:5 15
// undefined

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.info(i);
  }, 100);
}

// 5VM6167:3 5 (5 de 5 ori) !!???

//---------------------------------

for (var i = 0; i < 5; i++) {
  setTimeout(
    (function (i) {
      console.info(i);
    })(i),
    100
  );
}

// VM6231:4 0
// VM6231:4 1
// VM6231:4 2
// VM6231:4 3
// VM6231:4 4

//--------------------------------
