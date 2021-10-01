function sum(a,b){
    return a+b;
}
function total() {
    let a = +document.getElementById('number1').value;
    let b = +document.getElementById('number2').value;
    let result;
    result = sum(a,b);
    document.getElementById('result').innerHTML = 'Tổng của 2 số: '+ a  + '+' + b + ' = '+ result;
}