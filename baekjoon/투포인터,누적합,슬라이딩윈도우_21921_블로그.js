let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/21921.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [days, period] = input[0].split(" ").map(Number);
let visitors = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < period; i++) {
  sum += visitors[i];
}

let max = sum;
let cnt = 1;

let left = 0;
let right = period;

while (right < days) {
  sum -= visitors[left++];
  sum += visitors[right++];

  if (sum > max) {
    max = sum;
    cnt = 1;
  } else if (sum === max) {
    cnt++;
  }
}

console.log(max === 0 ? "SAD" : max + "\n" + cnt);
