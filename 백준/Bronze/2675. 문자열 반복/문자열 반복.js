const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);

for(let i = 1; i<=t; i++){
    let [r,s] = input[i].split(" ")

    let p = "";

    for(let i = 0; i<s.length; i++){
        let char = s[i];
        p += char.repeat(Number(r));
     
        
    }
    console.log(p);
}