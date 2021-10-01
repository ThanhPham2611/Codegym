const number = prompt('Nhập số');
const str = number.toString();
const result = [str[0]];

for(i=1;i<str.length;i++){
    if(str[i-1]%2===0 && str[i]%2===0){
        result.push('-',str[i]);
    }
    else{
        result.push[i];
    }
}
console.log(result.join(''));