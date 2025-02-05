let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/11728.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);
let arr3 = [];

let i = 0;
let j = 0;

while (i < n && j < m) {
  if (arr1[i] < arr2[j]) {
    arr3.push(arr1[i]);
    i++;
  } else {
    arr3.push(arr2[j]);
    j++;
  }

  if (i === n) {
    arr3 = arr3.concat(arr2.slice(j));
    break;
  }
  if (j === m) {
    arr3 = arr3.concat(arr1.slice(i));
    break;
  }
}

console.log(arr3.join(" "));
