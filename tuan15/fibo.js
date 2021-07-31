function Print() {
    let n = document.getElementById("number").value;
    //console.log(n);
    let a,b,result;
    a=0;
    b=1;
    result = b;
    for(var i=1;i<=n;i++){
        document.write(result + " ");
        result = a+b;
        a = b;
        b = result;
    }
    
}