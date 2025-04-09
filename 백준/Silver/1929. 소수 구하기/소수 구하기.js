const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m,n] = input[0].split(" ").map(Number);

function isPrime(num) {
    if (num === 1) return;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) return;
    }
    return console.log(num);
  }
  
  for (let i = m; i <= n; i++) {
    isPrime(i);
  }