let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/17609.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tc = Number(input[0]);
let arr = [];

for (let i = 1; i <= tc; i++) {
  arr.push(input[i].replace("\r", ""));
}

function palindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

for (let str of arr) {
  let left = 0;
  let right = str.length - 1;
  let erase = 0;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      if (palindrome(str, left + 1, right) || palindrome(str, left, right - 1)) {
        erase = 1;
      } else {
        erase = 2;
      }
      break;
    }
  }

  console.log(erase);
}
