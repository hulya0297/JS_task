// Task 1: Function Basics
// 1.1 Create a function named `greetUser` 
// that takes a user's name as an argument and prints a personalized greeting.

// 1.2 Write a function `calculateArea` 
// that calculates and returns the area of a rectangle. 
// The function should take the length and width as parameters.

// 1.3 Implement a function `isEven` that 
// checks if a given number is even. Return `true` if it is, otherwise `false`.


//1.1
let user_name = 'Hello'
function greetUser(user_name){
    let user = user_name
    return user
};
console.log(greetUser(user_name));


//1.2

let length = 5;
let width = 10;
function calculateArea(length, width) {
    let area = length * width;
    return area;
}

console.log(calculateArea(length, width));

//1.3


let number= prompt("reqemi daxil:");

function isEven (number){

    if( number%2 === 0){
        return true
    }
    else{
        return false
    }
};
 console.log(isEven (number));


// Task 2: Array Manipulation
// 2.1 Create an array named `fruits` containing at least five different fruit names. 
// Write a function `displayFruits` that prints each fruit in the array.

// 2.2 Implement a function `reverseArray` that reverses the elements of an array. 
// Test it with both numeric and string arrays.

// 2.3 Write a function `filterEvenNumbers` that 
// takes an array of numbers and returns a new array containing only the even numbers.


//2.1
let fruits=[ "apple","melon","banana","orange", "strawberry"];
function displayFruits(){
    fruits.map((fruit)=> console.log(fruit))
    };
displayFruits();
//2.2
let arr=[5,4,3,"Hello","Good"];
function reverseArray(){
  return  arr.reverse();

};
console.log(reverseArray());

//2.3
const numberS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(){
    return numberS.filter(num => num % 2 === 0);

}
console.log(filterEvenNumbers());

// Task 3: Object and Methods
// 3.1 Define an object `person` with 
// properties `name`, `age`, and `city`. 
// Write a function `displayPersonInfo` 
// that prints the information in a readable format.

// 3.2 Extend the `person` object by adding a method 
// `haveBirthday` that increments the age by 1 each time it's called.

// 3.3Create an object `car` with properties `make`, `model`, and `year`. 
// Write a method `displayCarInfo` that prints the car's information. 


//3.1

let person = {
    name: 'Hulya Azizova',
    age: 26,
    city: 'Baku'
  };

function displayPersonInfo(){

Object.entries(person).map((persons)=> console.log(persons));
}



displayPersonInfo()

// 3.2
let personS = {
    name: 'Hulya Azizova',
    age: 26,
    city: 'Baku',
    havebirthday: function() {
        console.log(this.age++);
      }

  };
  personS.havebirthday()
  personS.havebirthday()
  personS.havebirthday()
  

  //3.3
  let car={
    make:['Kia'],
    model:['Sportage'],
    year:[ 2021],
    displayCarInfo: function() {
      console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  };

  car.displayCarInfo();
 


// Task 4: Advanced Array Methods
// 4.1 Create an array of numbers and use the `map` function to square each element.
//  Print the resulting array.

// 4.2 Given an array of strings, use the `filter` function to create a new array
//  containing only strings with more than 5 characters.

// 4.3 Write a function `calculateTotal` that takes an array of prices and
//  uses the `reduce` function to calculate the total cost.

// //4.1
const numbers = [1, 2, 3, 4, 5];
 function getSquare(numbers){
    return numbers.map((num)=> num*num);
 }

 console.log(getSquare(numbers));

 //4.2

const stringArray= ['Hellooo','hi','worlddddd', 'goooood', 'happy'];

 const filterMethod = stringArray.filter(str => str.length > 5);
 console.log( filterMethod);
 

//4.3
const pricesArray = [5,9,10,26,23,29];
function calculateTotal(){
  const totalCost = pricesArray.reduce((curr, acc) => curr + acc, 0);
  return totalCost;

};
console.log( calculateTotal());