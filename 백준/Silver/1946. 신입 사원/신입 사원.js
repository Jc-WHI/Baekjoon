const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input[0];
let value = [];
let result = [];

for (let i = 1; i <= T; i++) {
    let N = input[i];
    value.push(
        input
            .splice(i + 1, N)
            .map((item) => item.split(" "))
            .sort((a, b) => a[0] - b[0])
    );
}

for (let i = 0; i < value.length; i++) {
    let length = value[i].length;
    let count = 1;
    let standard = Number(value[i][0][1]);
    for (let j = 1; j < length; j++) {
        if (Number(value[i][j][1]) < standard) {
            count++;
            standard = Number(value[i][j][1]);
        }
    }
    result.push(count);
}

console.log(result.join("\n"));