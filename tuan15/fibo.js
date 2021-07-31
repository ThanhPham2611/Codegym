function Print() {
    let n = document.getElementById("number").value;
    //console.log(n);
    let a,b,result,i;
    a=0;
    b=1;
    result = b;
    i=1;
    while(i<=n){
        i++;
        document.write(result + " ");
        result = a+b;
        a = b;
        b = result;
    }
    
}