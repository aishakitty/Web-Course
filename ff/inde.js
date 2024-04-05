// let x = 5 +7;
// console.log(x);

// function add(number1 ,number2) {
 //    // return number1 + number2;
 //    const sum = number1 + number2;
 //    return sum;
  // }

 // console.log(add(5, 8));
 // console.log(add(6, 4));

// aroow function
// const add = function(number1 , number2)=>{
 // const sum = number1 + number2;
 // return sum;
// }

// console.logg(add(5,2));
// console.log(add(6,2));

//build
const result = (number1, number2) => number1 + number2;
//call
console.log(result(5, 7));

const double = (number1)  =>  number1 * 2;
console.log(double(5));

const mul = number1 => number1 * 2;
console.log(double(5));


const showMessage = () => "hi guys!!";
console.log(showMessage());

// const showMessage = () => {
 // messg1 = "hi guys ,";
 // messg2 = "lets start!";
 // messg3 = "Hello in the first class";
 // return `${messg1} ${messg2} ${messg3};
// }

// console.log(showMessages());

const showMessages = (messg1, messg2, messg3) => {

 return messg1 + messg2 + messg3;
 // return `${messg1} ${messg2} ${messg3}`;
}

console.log(showMessage("hi guys ,",
     "lets start! ",
     "Hello in the first class"));

     console.log(showMessages(5,
      2,
      4));