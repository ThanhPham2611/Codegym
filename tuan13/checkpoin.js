function check() {
    let math = parseFloat(document.getElementById("Math").value);
    let literature = parseFloat(document.getElementById("Literature").value);
    let english = parseFloat(document.getElementById("English").value);
    let area = document.getElementById("Area").value;
    let total = parseFloat(math + literature + english);
    switch(area){
        case 'KV1':
            total += 0.75;
            break;
        case 'KV2-NT':
            total += 0.75
            break;
        case 'KV2':
            total += 0.25;
            break;
        case 'KV3':
            total += 0;
            break;            
    }
    document.getElementById("result").innerHTML ="Tổng điểm: " + total;
}
