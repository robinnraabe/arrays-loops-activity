/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

let hobbyArray = ['crafts', 'hockey', 'cycling', 'reading'];
let totalHobbies = 0;
for (hobby of hobbyArray) {
    console.log(hobby);
    totalHobbies++;
}
console.log('Total hobbies: ', totalHobbies);

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

let colorsArray = ['green', 'teal', 'red', 'yellow', 'orange', 'teal', 'purple', 'teal'];
let tealCount = 0;
for (color of colorsArray) {
    if (color == 'teal') {
        tealCount++;
    }
}
console.log(colorsArray)
console.log ('Teal was found ' + tealCount + ' times');

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let oddNumbers = [];
let evenNumbers = [];
for (number of numbersArray) {
    if (number % 2 == 1) {
        oddNumbers.push(number);
    }
    else {
        evenNumbers.push(number);
    }
}
console.log(numbersArray);
console.log(oddNumbers);
console.log(evenNumbers);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

// Example output
// true, false, true, true
// Toggled false, true, false, false

let boolArray = [true, true, false, true, false, false, false, true];
let toggled = [];
for (bool of boolArray) {
    if (bool === true) {
        toggled.push(false);
    }
    else {
        toggled.push(true);
    }
}
console.log(boolArray);
console.log(toggled);

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let numArray = [1, 0, 2, 3, 0, 4, 5, 0, 0, 0, 0];
let index = numArray.length - 1;
while (index >= 0) {
    if (numArray[index] == 0) {
        numArray.pop();
        index--;
    }
    else {
        break;
    }
}
console.log(numArray);

/**
 * #6 (STRETCH) Greatest Position Distance
 * --------------------
 * 1. Create a largish array of numbers, including at least two different
 *    numbers that repeat (e.g. 0, 2, 2, 7, 4, 1, 7, 8)
 * 2. Write a loop that finds the greatest position distance between
 *    repeating numbers in your array. In the above example, the 2's have
 *    a distance of 1, while the 7's have a distance of 3, so the
 *    greatest position distance for that array is 3.
 * 3. Output the array and its greatest position distance
 */

// Example output
// 5, 1, 8, 2, 9, 1, 4, 5, 0
// Greatest Position Distance: 7

let largeArray = [1, 1, 1, 2, 1, 3, 3, 3, 3, 3, 1, 1, 2];
let greatestPositionDistance = 0;
let perLoopCounter = 0;
let numIndex = 0;
for (num of largeArray) {
    let checkIndex = numIndex + 1;
    while (checkIndex < largeArray.length){
        if (num == largeArray[checkIndex]) {
            perLoopCounter = checkIndex - numIndex;
            break;
        }
        checkIndex++;
    }
    if (perLoopCounter > greatestPositionDistance) {
        greatestPositionDistance = perLoopCounter;
        perLoopCounter = 0;
    }
    numIndex++;
}
console.log(largeArray);
console.log('Greatest Position Distance: ', greatestPositionDistance);
