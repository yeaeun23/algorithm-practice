let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/1300.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = n * n;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // i행에서 mid보다 작거나 같은 원소의 개수
    total += Math.min(parseInt(mid / i), n);
  }

  if (total >= k) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(start); // k번째 수 출력
