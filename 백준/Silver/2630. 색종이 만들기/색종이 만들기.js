const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]; // Number로 만들어주기 위함임
let paper = input.slice(1).map(v=>v.split(" ").map(vv=>+vv)); // 이차원 배열 입력

let paperCount = n =>{
    let count = [0,0];
    function recursion(size, x, y){
        let total = 0;
        for (let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                total += paper[y+j][x+i];
            }
        }

        if(total === 0) count[0]++;
        else if(total === size * size) count[1]++;
        else{
            size /= 2;
            recursion(size, x, y);
            recursion(size, x + size, y);
            recursion(size, x, y + size);
            recursion(size, x + size, y + size);
        }
    }

    recursion(n, 0, 0);
    console.log(count.join("\n"));

};

paperCount(n);