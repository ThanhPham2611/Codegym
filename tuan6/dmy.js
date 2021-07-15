let date = prompt("Nhập ngày");
let month = prompt("Nhập tháng");
let year = prompt("Nhập năm");
if(date>31 || month>12){
    alert('Ngày hoặc tháng nhập sai giá trị');
}
else{
    document.write(date + "-" + month + "-" + year);
}
