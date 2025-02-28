let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/22862.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [n, deleteCan] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let maxLength = 0;
let deleteCnt = 0;

for (let start = 0, end = 0; start < n; start++) {
  while (end < n) {
    if (arr[end] % 2 === 0) {
      end++;
    } else {
      if (deleteCnt === deleteCan) {
        break;
      }

      deleteCnt++;
      end++;
    }
  }

  maxLength = Math.max(maxLength, end - start - deleteCnt);

  if (arr[start] % 2 === 1) {
    deleteCnt--;
  }
}

console.log(maxLength);
