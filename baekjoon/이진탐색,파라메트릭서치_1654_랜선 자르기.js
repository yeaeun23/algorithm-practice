let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/1654.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [lan, need] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= lan; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 0; i < lan; i++) {
    total += parseInt(arr[i] / mid);
  }

  if (total >= need) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
