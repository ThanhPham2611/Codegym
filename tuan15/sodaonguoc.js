debugger;
let num = parseInt(prompt("Nhập số: "));
console.log(num);
let total = 0;
let tmp;
while (num>0){
    tmp = num%10;
    total = total*10 + tmp;
    num = parseInt(num/10);
}
alert('Số đảo ngược là: ' + total);

