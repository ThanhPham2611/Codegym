let date = Number(prompt("Nhập tháng bạn muốn kiểm tra: "));
switch(date){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('Có 31 ngày');
        break;
    case 2:
        alert('Có 28 hoặc 29 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('Có 30 ngày');
        break;
    default:
        alert('Nhập lại tháng');
        break;            
}