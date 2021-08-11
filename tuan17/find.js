let number = [1,2,3,4,5,6];
let value = +prompt("Nhập giá trị muốn tìm kiếm");
for(i=0;i<number.length;i++){
    if(value == number[i]){
        alert('Giá trị ' + value + 'ở vị trí ' + i);
    }
    else{
        alert('Không tìm thấy giá trị');
    }
}
