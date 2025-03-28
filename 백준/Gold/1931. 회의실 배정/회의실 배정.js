const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr =  [];
for(let i = 1; i<=n;i++){
    let [a,b] = input[i].split(" ").map(Number);
    arr.push([a,b]);

}

arr.sort((a,b)=>(a[1]===b[1]?a[0]-b[0]:a[1]-b[1]));
let answer = 1;
let finish = arr[0][1]

for(let i = 1;i<n;i++){
    if(finish>arr[i][0]) continue;

    finish = arr[i][1];
    answer+=1

}




console.log(answer);
