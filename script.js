const num1 = 5;
const num2 = 3;

// exe1
// Write a JS code to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// exe 2
const arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
// Write a JS code to print Even numbers in given array
for (let i = 0; i < arr2.length; i++ ) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
}

// exe 3
const arr4 = [2, 7, 4, 9, 6, 1, 6, 3];
// An array is special if every even index contains an even number and every odd index contains an odd number.
// Log true if an array is special, and false otherwise.

function special(arr4) {
    for (i = 0; i < arr4.length; i++) {
        if (arr4[i] % 2 !== i % 2) return false;
    }
    return true;
}
console.log(special(arr4));

// exe 4
const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
};
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// log the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".
let sum = 0 ;

for(const value of Object.values(stolenItems)) {
    sum += value
}
if (sum === 0) {
    console.log("Lucky you!");
} else {
    console.log(sum);
}

// exe 5
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]
// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// write JS code that determines whether or not an array is a factor chain.
const arr3 = [3, 6, 12, 36];

function factor(arr3) {
    for (let i = 0; i < arr3.length - 1; i++) {
        
        if( arr3[i + 1] % arr3[i] !== 0 )  return false;
        
    }  
    return true;
}

console.log(factor(arr3));

// exe 6
const arr7 = ["###", "#*#", "###"];
// write JS code that logs true if an asterisk * is inside a box, and false otherwise.

function asterisk(arr7) {
    for (let i = 0; i < arr7.length; i++) {
        
        if (arr7[i].includes("*") ) return true;
            
    }   
    return false;
}
console.log(asterisk(arr7));


// exe 7
const mean7 = 12345;
// write JS code that logs the mean of all digits.
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.

const str = mean7.toString();

let total = 0;

for ( let value of (str) ){
    total += parseInt(value);
}
console.log (total / str.length);







