let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/1493.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [length, width, height] = input[0].split(" ").map(Number);
let n = Number(input[1]);
let cubes = Array(20).fill(0);

for (let i = 2; i < n + 2; i++) {
  let data = input[i].replace("\r", "").split(" ").map(Number);
  cubes[data[0]] = data[1];
}

// 가장 가까운 2의 거듭제곱 찾기
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) {
    i++;
  }
  return i - 1;
}

let size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0; // 결과값
let used = 0; // 사용한 큐브 개수(부피)

// 큰 큐브부터 시작
for (let i = size; i >= 0; i--) {
  used *= 2 ** 3; // 이전 큐브 사용 개수 * 8배
  cur = 2 ** i; // 현재 큐브 길이

  // 필요한 큐브 개수
  let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;

  // 가능한 큐브 개수
  let usage = Math.min(required, cubes[i]);
  res += usage; // 사용한 큐브 개수 결과값에 더해주기
  used += usage; // 사용한 큐브 개수 업데이트
}

// 박스를 다 채우지 못한 경우 -1 출력
console.log(used === length * width * height ? res : -1);
