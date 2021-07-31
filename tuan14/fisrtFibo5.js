let n1=0,n2=1,n3=1,i=2;
while(i<=20){
    n3 = n1+n2;
    i++;
    n1=n2;
    n2=n3;
    if(n3%5==0){
        console.log(n3);
        break;
    }
}