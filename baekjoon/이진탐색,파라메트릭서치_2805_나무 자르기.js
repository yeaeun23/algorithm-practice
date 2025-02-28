let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/2805.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [tree, need] = input[0].split(" ").map(Number);
let height = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...height);

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 0; i < tree; i++) {
    total += height[i] > mid ? height[i] - mid : 0;
  }

  if (total >= need) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
