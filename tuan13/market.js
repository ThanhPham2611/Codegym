function checkmoney() {
    let name = document.getElementById("name").value;
    let guava = 20000 + "VND/Kg";
    let watermelon = 20000 + "VND/Kg";
    let Apple = 30000 + "VND/Kg";
    let Mango = 30000 + "VND/Kg";
    let Orange = 40000 + "VND/Kg";
    let Rambutan = 40000 + "VND/Kg";
    let Mangosteen = 50000 + "VND/Kg";
    switch(name){
        case 'Ổi':
            document.getElementById("result").innerHTML = guava;
            break;
        case 'Dưa Hấu':
            document.getElementById("result").innerHTML = watermelon;
            break;
        case 'Táo':
            document.getElementById("result").innerHTML = Apple;
            break;
        case 'Xoài':
            document.getElementById("result").innerHTML = Mango;
            break;
        case 'Cam':
            document.getElementById("result").innerHTML = Orange;
            break;
        case 'Chôm Chôm':
            document.getElementById("result").innerHTML = Rambutan;
            break;
        case 'Măng Cụt':
            document.getElementById("result").innerHTML = Mangosteen;
            break;                        
        default:
            alert("Không tìm thấy giá hoa quả vừa nhập");
            break;
    }
}