let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/2512.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let jibang = Number(input[0]);
let request = input[1].split(" ").map(Number);
let budget = Number(input[2]);

let start = 1;
let end = Math.max(...request);

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 0; i < jibang; i++) {
    total += Math.min(mid, request[i]);

    // 이미 예산 초과인지 체크
    if (i != jibang - 1 && total > budget) {
      break;
    }
  }

  if (total > budget) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
