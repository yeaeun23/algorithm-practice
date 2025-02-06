let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/1463.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let dp = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  // 1을 뺄 경우
  dp[i] = dp[i - 1] + 1;

  // 2로 나뉠 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나뉠 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

// dp[i] = i를 1로 만드는 최소 연산 횟수
console.log(dp[n]);
