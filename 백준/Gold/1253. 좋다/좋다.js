const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let count = 0;

for (let i = 0; i < n; i++) {
    let target = arr[i];
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (left === i) {
            left++;
            continue;
        }
        if (right === i) {
            right--;
            continue;
        }

        let sum = arr[left] + arr[right];

        if (sum === target) {
            count++;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(count);
