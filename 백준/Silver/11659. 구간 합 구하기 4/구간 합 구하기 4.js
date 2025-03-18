const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(' ').map(Number);
const partialsumArray = new Array(arr.length+1).fill(0);
const output = [];

arr.forEach((v,i)=>partialsumArray[i+1] = partialsumArray[i]+v);

input.slice(2).forEach(ij=>{
    const [i,j]=ij.split(' ').map(v=>+v);
    output.push(partialsumArray[j]-partialsumArray[i-1]);
});

console.log(output.join('\n'));
