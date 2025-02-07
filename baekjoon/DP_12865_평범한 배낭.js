let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/12865.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [n, max_weight] = input[0].split(" ").map(Number);

let items = [];
for (let i = 1; i <= n; i++) {
  let [weight, value] = input[i].split(" ").map(Number);
  items.push({ weight, value });
}

let dp = Array.from({ length: n + 1 }, () => Array(max_weight + 1).fill(0));
for (let i = 1; i <= n; i++) {
  let { weight, value } = items[i - 1];

  for (let j = 1; j <= max_weight; j++) {
    // 물건을 넣을 수 없는 경우 (배낭 무게 < 물건 무게)
    if (j < weight) {
      // 이전 상태 유지
      dp[i][j] = dp[i - 1][j];
    } else {
      // 물건을 안넣는 경우 vs 넣는 경우
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}

// i번째 물건까지, 배낭의 무게가 j일 때 가능한 최대 가치
console.log(dp[n][max_weight]);
