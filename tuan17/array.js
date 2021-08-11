let x=0;
let array = Array();
 
function AddArray() {
    array[x] = document.getElementById("array").value;
    alert("Bạn vừa thêm " + array[x] + " vào hệ thống");
    x++;
    document.getElementById("array").value = "";
}

function Display_array() {
    let e = '<hr/>';
    for(let i=0;i<array.length;i++){
        e += "Element " + i + " = " + array[i] + '<br/>';
    }
    document.getElementById("Display").innerHTML = e;
}