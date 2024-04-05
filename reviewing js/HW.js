// 1. function print your info:

function printing(names) {
 return `hello ${names}`;
}
console.log(printing("Jood"));



// 2. function mutiply by 2 numbers:

function multiply(num1, num2) {
 const times = num1 * num2;
 return times;
}
console.log(multiply(5 ,8))



// 3. function divide by 2 numbers:

function divide(num1, num2) {
 const divi = num1 / num2;
 return divi;
}
console.log(divide(6 ,3))



// 4. loop to print sum of numbers from 5 to 15 by while,do...while and for:

// 1.while:
let looping = 5;
let sum = 0;
while (looping < 16){
 console.log(looping);
 sum += looping;
 looping += 1;
}
console.log(sum);

// 2.do & while:
let loop = 5;
let flf = 0;
do {
 console.log(loop);
 flf += loop;
loop += 1;
} while (loop < 16);
console.log(flf);

// 3.for:
let now = 0;
for (let loopy = 5; loopy < 16; loopy += 1) {
 console.log(loopy);
 now += loopy;
}
console.log(now);



// 5. convert one way from question 4 function:

// 1/2 do & while:
/*function plus(starting, ending) {
 do{
  let add = 0;
}while(starting < ending) {
 add += starting;
 starting += 1;
}
return add;
}
console.log(plus(20 ,30));

// 2/2 for:
function addition(start, end) {
 let add = 0;
 for (let  = 5; no < 16; no += 1; brb += start)
 return brb;
} 
console.log(pls(5 ,6))*/









// 1.arrow function print ur info:

const crochet = (m1 ,m2 ,m3) => {
 return m1 + m2 + m3;
}

console.log(crochet("We May Not Be ",
"Perfect But We All",
"Have Smth To Make Us Special"
));



// 2.arrow function multiply by 2 numbers:

const hello = (num1 ,num2) => {
 return num1 * num2;
}
console.log(hello(5, 5));



// 3.arrow function divide by 2 numbers:

const Hi = (num1, num2) => {
 return num1 / num2;
}
console.log(Hi(6, 6));