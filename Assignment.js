//Sum of Numbers (Loop)
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sum(5)); // return 15

//Object Properties
let book = {
    bookName: "3 Theories of Everything",
    author: "Ellis Potter",
    year: 2012
}
for (let key in book) {
    console.log("key=", key, "value=", book[key]);
}

//Array Reversal
function reverseArray(arr) {
    const reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

const originalArray = [1, 2, 3];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

//Count Occurrences (1D Array)
function countOccurrences(arr) {
    let occurrences = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        occurrences[item] = occurrences[item] ? occurrences[item] + 1 : 1;
    }
    return occurrences;
}
console.log(countOccurrences(['apple', 'banana', 'apple'])); // apple: 2, banana: 1

//Multiplication Table (2D Array)
function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.log(multiplicationTable(3));
//Average of Array (1D)
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // return 3


//Flatten a 2D Array
function flatten(arr) {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flatArray.push(arr[i][j]);
        }
    }
    return flatArray;
}
console.log(flatten([
    [1, 2],
    [3, 4]
])); // [1, 2, 3, 4]