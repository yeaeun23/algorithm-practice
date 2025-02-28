let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/11441.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let arr = [0, ...input[1].split(" ").map(Number)];
let m = Number(input[2]);

let prefix_sum = [0];

for (let i = 1; i <= n; i++) {
  prefix_sum.push(prefix_sum[i - 1] + arr[i]);
}

for (let i = 3; i < m + 3; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  console.log(prefix_sum[end] - prefix_sum[start - 1]);
}
