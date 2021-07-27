let user = prompt("Nhập tên tài khoản: ");
let pass = prompt("Nhập mật khẩu: ");

if(user == 'Admin' && pass =='TheMaster'){
    alert("Welcome");
}
else if(user == 'Admin' && pass == null){
    alert("Canceled");
}
else if(user == 'Admin' && pass !=' '){
    alert("Wrong Password");
}
else if(user == null){
    alert("canceled");
}
else{
    alert("i don't know you");
}