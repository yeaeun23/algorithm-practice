let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/1012.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tc = Number(input[0]);
let line = 1;

while (tc--) {
  let [m, n, k] = input[line].split(" ").map(Number); // 가로, 세로, 배추 개수
  let graph = [];

  for (let i = 0; i < n; i++) {
    graph[i] = Array(m).fill(0);
  }

  for (let i = 1; i < k + 1; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 묶음이 시작되면
      if (dfs(graph, n, m, i, j)) {
        cnt++;
      }
    }
  }

  line += k + 1;
  console.log(cnt);
}

function dfs(graph, n, m, x, y) {
  // 범위를 벗어나면
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  // 방문하지 않았다면
  if (graph[x][y] === 1) {
    // 방문 처리
    graph[x][y] = -1;

    // 상하좌우 호출
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x, y + 1);
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x + 1, y);

    return true;
  }

  return false;
}
