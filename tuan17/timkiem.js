let value = +prompt("Nhập giá trị muốn tìm kiếm trong mảng");
let number = [-3,2,1,0,1,2,3,4,5];
for(i=0;i<number.length;i++){
    if(value == number[i]){
        alert('Value ' + number[i] + " ở vị trí " + i);
    }
}