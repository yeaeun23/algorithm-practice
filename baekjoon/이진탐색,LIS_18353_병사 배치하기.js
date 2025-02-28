let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/18353.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.reverse(); // 내림차순으로 변경 (LIS로 풀기 위해)

let lis = [0]; // Longest Increasing Subsequence

for (x of arr) {
  if (lis[lis.length - 1] < x) {
    // 마지막 값보다 크면 뒤에 추가
    lis.push(x);
  } else {
    // 아니면 lowerBound로 들어갈 위치 찾아서 교체
    let idx = lowerBound(lis, x, 0, lis.length);
    lis[idx] = x;
  }
}

// 전체 병사 수 - lis 길이(초기 0 제외) = 열외할 병사 수
console.log(n - (lis.length - 1));
