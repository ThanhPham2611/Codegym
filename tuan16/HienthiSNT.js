debugger;
let n = +prompt("Nhập số lượng số nguyên tố cần in");
let count = 0;
let N = 2;
while(count<n){
    let k = 0;
    for(i=2;i<=Math.sqrt(N);i++){
        if(N%i==0){
            k++;
        }
    }
    if(k==0){
        console.log(N);
        count++;
        N++
    }
    else{
        N++;
    }
}