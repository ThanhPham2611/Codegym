let a,b,total;
total = 0;
a = prompt("Nhập số A:");
b = prompt("Nhập số B");
for(i=a;i<=b;i++){
    total += i;
}
alert("Tổng của dãy số từ A->B là: " + total);