let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/10986.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [0, ...input[1].split(" ").map(Number)];

let sum = [0]; // 누적합

for (let i = 1; i <= n; i++) {
  sum.push(sum[i - 1] + arr[i]);
}

let rem = []; // 누적합을 m으로 나눈 나머지
let counter = {}; // 나머지 개수

for (let i = 0; i <= n; i++) {
  rem.push(sum[i] % m);

  if (rem[i] in counter) {
    counter[rem[i]]++;
  } else {
    counter[rem[i]] = 1;
  }
}

let res = 0;

for (let i = 0; i < m; i++) {
  if (i in counter) {
    res += (counter[i] * (counter[i] - 1)) / 2; // nC2
  }
}

console.log(res);
