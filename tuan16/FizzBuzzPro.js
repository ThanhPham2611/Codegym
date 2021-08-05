let a,b,total;
a = +prompt("Nhập số A:");
b = +prompt("Nhập số B");
for(i=a;i<=b;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
