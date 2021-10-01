let x = [-3,5,1,3,2,10,9];
let first = 0;//->-3
let last = x.length - 1;//->9
while(first<last){
    let b = x[first];//->-3
    x[first] = x[last];//->9
    x[last] = b;
    first ++;
    last --;
}
document.write(x);