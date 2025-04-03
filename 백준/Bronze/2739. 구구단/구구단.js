const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

for(let i = 1; i<=9; i++){
    let str = ""
    let a = Number(n);
    let b = Number(i);
    let result = a*b;
    str += n;
    str += " ";
    str += "*";
    str +=" ";
    str += b;
    str +=" ";
    str += "=";
    str += " ";
    str += result;
    console.log(str);
    
}