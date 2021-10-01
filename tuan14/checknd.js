let C = prompt("Mời bạn nhập nhiệt độ hiện tại");
while(C<20 || C>100){
    if(C<20){
        alert("Bạn cần tăng nhiệt độ");
    }
    if(C>100){
        alert("Bạn cần giảm nhiệt độ");
    }
    C = prompt("Mời bạn nhập lại nhiệt độ hiện tại");
}
