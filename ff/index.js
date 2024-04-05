// const index = [0,1,2,3,4]

const numbers = [4, 6, 8];
console.log(numbers.length);
console.log(numbers[2]);
console.log(numbers[0]);

for(let index = 0 ; index < numbers.length ; index ++){
    console.log(`index is : ${index} and item value is : ${numbers[index]}`);
}
//

console.log('************');
numbers.forEach((value) => {
 console.log(` item value is : ${value}`);
});

numbers.forEach((value , index) => {
    console.log(`index is : ${index} and item value is : ${value}`);
});

numbers.forEach((value , index ,array) => {
 console.log(`index is : ${index} , item value is : ${value} and array is ${array}`);
});

const fruits = ["orange" , "banana" , "apple" , "grapes"];
(fruit) => {}
fruits.forEach()