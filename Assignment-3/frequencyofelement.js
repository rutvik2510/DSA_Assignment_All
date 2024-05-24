// Count Frequency of Elements
// Given an arr of n integers, write a program to count the frequency of each element in the arr.

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const result = {};

for (let i = 0; i < arr.length; i++) {
    if (arr[i] in result) {
        result[arr[i]] = result[arr[i]] + 1;
    } else {
        result[arr[i]] = 1;
    }
}

console.log(result);