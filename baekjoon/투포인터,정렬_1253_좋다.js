let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/1253.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b); // 오름차순 정렬

let good = 0;
for (let i = 0; i < n; i++) {
  let start = 0;
  let end = n - 1;

  while (start < end) {
    if (start === i) {
      start++;
      continue;
    }
    if (end === i) {
      end--;
      continue;
    }

    let sum = arr[start] + arr[end];
    if (sum < arr[i]) {
      start++;
    } else if (sum > arr[i]) {
      end--;
    } else {
      good++;
      break;
    }
  }
}

console.log(good);
