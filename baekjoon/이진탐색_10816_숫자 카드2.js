let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/10816.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let card = Number(input[0]);
let card_list = input[1].split(" ").map(Number);
card_list.sort((a, b) => a - b);

let check = Number(input[2]);
let check_list = input[3].split(" ").map(Number);

let res = "";

for (let i = 0; i < check; i++) {
  let cnt = countByRange(card_list, check_list[i], check_list[i]);
  res += cnt + " ";
}

console.log(res);
