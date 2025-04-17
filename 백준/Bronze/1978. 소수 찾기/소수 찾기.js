const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

function isPrime(num) {
	if(num === 1) return false; //1은 소수가 아니다.
 	
 	for(let i = 2; i < num; i++) {
  		if(num % i === 0) return false;
        
	} 
    return true; 
}

list = [];
for( i of arr){
    if (isPrime(i)==true){
        list.push(i);

    }
}



console.log(list.length);