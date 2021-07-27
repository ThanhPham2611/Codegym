let year = prompt('Nhập năm mà bạn muốn kiểm tra');
year = Number(year);
if(year % 4 == 0){
    alert("Năm " + year +" là năm nhuận");
}
else if(year % 4 == 0 && year % 100 != 0){
    alert("Năm " + year + " là năm nhuận");
}
else{
    alert("Năm " + year + " không phải là năm nhuận");
}