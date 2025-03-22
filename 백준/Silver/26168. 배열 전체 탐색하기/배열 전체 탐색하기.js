const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

function checkFirst(k) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= k) {
      cnt++;
    }
  }
  console.log(cnt);
}

function checkSecond(k) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > k) {
      cnt++;
    }
  }
  console.log(cnt);
}

function checkThird(i, j) {
  let cnt = 0;
  for (let idx = 0; idx < n; idx++) {
    if (arr[idx] >= i && arr[idx] <= j) {
      cnt++;
    }
  }
  console.log(cnt);
}

for (let j = 2; j < m + 2; j++) {
  const query = input[j].split(" ");
  const type = Number(query[0]);

  if (type === 1) {
    checkFirst(Number(query[1]));
  } else if (type === 2) {
    checkSecond(Number(query[1]));
  } else if (type === 3) {
    checkThird(Number(query[1]), Number(query[2]));
  }
}