function Print() {
    let n = document.getElementById("number").value;
    //console.log(n);
    let a,b,result,i,total;
    total = 0;
    a=0;
    b=1;
    result = b;
    i=1;
    while(i<=n){
        i++;
        document.write(result + " ");
        total += b;
        result = a+b;
        a = b;
        b = result;
    }
    console.log(total);

    
}