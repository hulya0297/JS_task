//1. Write program that will reverse string: 'Hello world' => 'dlrow olleH'    


let string = "Hello World";
function reverseString( string ){
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
    
}
console.log( reverseString( string ));

//2. Write program to repeat every character in string 3 times:
//  'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'  
let stringCharacter=  'Hello world';
function repeatCharacters(stringCharacter) {
    let repeat = '';
    for (let i = 0; i < stringCharacter.length; i++) {
        for (let h = 0; h < 3; h++) {
            repeat += stringCharacter[i];
        }
    }
    return repeat;
}
console.log(repeatCharacters(stringCharacter));

//3. Write program to repeat given string n times: 'Hello world', 
// 3 => 'Hello worldHello worldHello world'

let repeatString = 'Hello world';
let a = 3;
function repeatStringCount(repeatString,a ){
    let repeat = '';
    for (let i = 0; i < a; i++) {
        repeat += repeatString;
    }
    return repeat;
}

console.log(repeatStringCount(repeatString,a));


//4. Write program to find the first 
// not repeated character: 'abacddbec' => 'e'    
 
let letters= "abacddbec"


function firstNotRepeat(letters){
    

}



// 5.Write program to find the first repeated character: 'abacddbec' => 'a'   


//6. Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}    


//7. Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...' 

let str = 'Hello world';
let p =5;


function cutString(str, p,){
    let cutStr= '';
    for (let i = 0; i < p; i++) {

        cutStr+=str[i];
    }

     return cutStr ;
   

}
console.log(cutString(str, p,));

//8.Write program that truncates string in a given length, but it should not break the word: 
// 'Hello world, nice talking to you', 20 => 'Hello world, nice...'    


//9. Create a program to calculate the sum of the 
// elements in an array of numbers: [1, 2, 3, 4, 5] => 15    

let arr = [1, 2, 3, 4, 5];

function calSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(calSum(arr));

//10. Create a program to calculate the average of the 
// elements in an array of numbers: [1, 2, 3, 4, 5] => 3   

let array = [1, 2, 3, 4, 5];
function calAverage(array) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / array.length;
}
console.log(calAverage(array));

//11.Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5 

let arrN = [1, 2, 3, 4, 5];

function maxNum(arrN) {
    let max = arrN[0];
    for (let i = 1; i < arrN.length; i++) {
        if (arrN[i] > max) {
            max = arrN[i];
        }
    }
    return max;
}
console.log(maxNum(arrN));

//12. Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1 

let arrNum = [1, 2, 3, 4, 5];

function minNum(arrNum) {
    let min = arrN[0];
    for (let i = 1; i < arrN.length; i++) {
        if (arrNum[i] < min) {
            min = arrNum[i];
        }
    }
    return min;
}
console.log(minNum(arrNum));

//13.Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4    

//14.Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2    

//15. Create a program to find the count of each element in an array of numbers: 
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}    

//16. Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

let numArr = [1, 2, 3, 4, 5];

function sumOdd (numArr){
    let sum = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 !== 0) {
            sum += numArr[i];
        }
    }

    return sum;
}
 console.log(sumOdd (numArr));

 //17. Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6

 let numArray = [1, 2, 3, 4, 5];

function sumEven (numArray){
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArr[i] % 2 === 0) {
            sum += numArray[i];
        }
    }

    return sum;
}
 console.log(sumEven (numArray));

