const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);

const line2 = input[1].split(' ');
const problemType = parseInt(line2[0], 10);

const factorials = [1n];
for (let i = 1; i <= N; i++) {
    factorials[i] = factorials[i - 1] * BigInt(i);
}

const visited = Array(N + 1).fill(false);

if (problemType === 1) {
    const k = BigInt(line2[1]);
    const resultPermutation = [];
    let currentK = k - 1n;

    for (let i = 1; i <= N; i++) {
        const blockSize = factorials[N - i];
        let indexInAvailable = currentK / blockSize;
        currentK %= blockSize;

        let count = 0;
        for (let num = 1; num <= N; num++) {
            if (!visited[num]) {
                if (count === Number(indexInAvailable)) {
                    resultPermutation.push(num);
                    visited[num] = true;
                    break;
                }
                count++;
            }
        }
    }
    console.log(resultPermutation.join(' '));

} else {
    const permutation = line2.slice(1).map(Number);
    let rank = 0n;

    for (let i = 0; i < N; i++) {
        const digit = permutation[i];
        const blockSize = factorials[N - 1 - i];

        let localRank = 0;
        for (let num = 1; num < digit; num++) {
            if (!visited[num]) {
                localRank++;
            }
        }

        rank += BigInt(localRank) * blockSize;
        visited[digit] = true;
    }

    console.log((rank + 1n).toString());
}