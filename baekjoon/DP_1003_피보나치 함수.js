let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/1003.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let d = Array(41).fill(0);
d[1] = 1;

// 피보나치 수열
for (let i = 2; i < d.length; i++) {
  d[i] = d[i - 2] + d[i - 1];
}

let tc = Number(input[0]);

// 0과 1이 출력되는 횟수
for (let i = 1; i <= tc; i++) {
  let n = Number(input[i]);

  if (n === 0) {
    console.log(1, 0);
  } else {
    console.log(d[n - 1], d[n]);
  }
}
