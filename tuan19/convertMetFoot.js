function feetToMeter(F) {
    F = parseFloat(F);
    document.getElementById('result').innerHTML = 0.305 * F + 'm';
}

function meterToFeet(M) {
    M = parseFloat(M);
    document.getElementById('result').innerHTML = 3.279 * M + 'feet';    
}

function convert() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    if(from == to){
        alert('Hai lựa chọn đang giống nhau');
    }
    else if(from == 'Feet' && to == 'Met'){
        let input = document.getElementById('num').value;
        feetToMeter(input);
    }
    else{
        let input = document.getElementById('num').value;
        meterToFeet(input);
    }
}