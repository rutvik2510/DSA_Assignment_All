// Find the missing integer
function MissingNum(num1, n) {
    let Sum_Num = ((n + 1) * (n + 2)) / 2;
    for (let i = 0; i < n; i++) {
        Sum_Num -= num1[i];
    }
    returSu_Numm;
}
const array = [1, 2, 4, 5, 3, 7, 8];
const n = array.length;
console.log("  missing number in array : ", MissingNum(array, n));