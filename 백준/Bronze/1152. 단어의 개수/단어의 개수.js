const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
let cnt = 0;
for(let i=0; i<input.length; i++){
    if(input[i]!==""){
        cnt ++;
    }
}
console.log(cnt);