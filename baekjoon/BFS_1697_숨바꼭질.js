let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/1697.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Queue {
  constructor() {
    this.q = {};
    this.head = 0;
    this.tail = 0;
  }
  insert(x) {
    this.q[this.tail] = x;
    this.tail++;
  }
  delete() {
    let tmp = this.q[this.head];
    delete this.q[this.head];
    this.head++;
    return tmp;
  }
  getLength() {
    return this.tail - this.head;
  }
}

let [n, k] = input[0].split(" ").map(Number);

const MAX = 100000;
let visited = Array(MAX + 1).fill(0);

function bfs() {
  let q = new Queue();
  q.insert(n); // 시작 위치를 큐에 추가

  while (q.getLength() !== 0) {
    let cur = q.delete(); // 현재 위치

    // 동생을 찾은 경우
    if (cur === k) {
      // 현재 위치까지 시간 반환
      return visited[cur];
    }

    // 다음 위치 계산
    for (let next of [cur - 1, cur + 1, cur * 2]) {
      // 범위를 벗어날 경우
      if (next < 0 || next > MAX) {
        continue;
      }

      // 방문하지 않은 위치일 경우
      if (visited[next] === 0) {
        visited[next] = visited[cur] + 1; // 현재 시간에 1초 추가(방문 기록)
        q.insert(next); // 다음 위치를 큐에 추가
      }
    }
  }
}

console.log(bfs());
