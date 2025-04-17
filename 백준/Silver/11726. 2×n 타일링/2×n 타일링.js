const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

dp[0] = 1;
if (n >= 1) {
    dp[1] = 1;
}
if (n >= 2) {
    dp[2] = 2;
}

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

const result = dp[n] % 10007;
console.log(result);