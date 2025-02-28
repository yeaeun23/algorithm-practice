let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "./baekjoon/tc/2606.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let edge = Number(input[0]);
let node = Number(input[1]);
let graph = [];

for (let i = 1; i <= edge; i++) {
  graph[i] = [];
}

for (let i = 2; i < node + 2; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = Array(edge + 1).fill(false);
let cnt = 0;

function dfs(v) {
  visited[v] = true;
  cnt++;

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

dfs(1);
console.log(cnt - 1);
