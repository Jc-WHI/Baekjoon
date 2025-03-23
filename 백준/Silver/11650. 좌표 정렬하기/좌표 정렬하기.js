const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 1; i<=n; i++){
    let [x,y] = input[i].split(" ").map(Number);
    arr.push([x,y]);
}
function compare(a,b){
if(a[0]!==b[0]){
    return a[0]-b[0];
}
else{
    return a[1]-b[1];
}




}
arr.sort(compare);

for(let i = 0; i<n; i++){
    console.log(arr[i][0]+" "+arr[i][1]);
}