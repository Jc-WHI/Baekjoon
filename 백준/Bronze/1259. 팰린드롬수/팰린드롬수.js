const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");



function isFal(str){
    let size = str.length;
    for(let i = 0; i<size/2;i++){
        if (str[i]!==str[size-1-i]){
            return false;
        }
    }
    return true;

}

for(let i = 0; i<input.length-1;i++){
    let str = input[i];

    if( isFal(str)){
        console.log('yes');
    }else if(str = 0){
        break;
    }
    else{
        console.log('no');
    }


}