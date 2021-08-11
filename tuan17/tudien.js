const wordE = ['hello','goodbye','ok'];
const wordV = ['xin chào','tạm biệt','được'];

function add(){
    WordE = prompt("Từ tiếng anh");
    WordV = prompt("Từ tiếng việt");
    wordE.push(WordE);
    wordV.push(WordV);
    alert("Bạn vừa thêm từ " + WordE + " vào hệ thống với nghĩa là: " + WordV);
}

function find() {
    inputfind = document.getElementById('name').value;
    console.log(inputfind);
    for(i=0;i<wordE.length;i++){
        if(wordE.indexOf(inputfind) != -1){
            if(inputfind == wordE[i]){
                alert('Từ ' + wordE[i] + ' có nghĩa là: ' + wordV[i]);
                break;
            }
        }
        else{
            if(inputfind != " "){
                alert('Không tìm thấy từ');
                yes = confirm('Bạn có muốn thêm từ ' + inputfind + ' vào từ điển không?');
                if(yes == true){
                    wordE.push(inputfind);
                    WordV = prompt('Nghĩa là: ');
                    wordV.push(WordV);
                    alert('Bạn vừa thêm từ ' + inputfind + ' vào hệ thống với nghĩa là: ' + WordV);
                    break;
                }
            }
            else{
                break;
            }
        }
    }
}

function remove() {
    inputRemove = prompt("Nhập tên từ tiếng anh muốn xóa");
    for(i=0;i<wordE.length;i++){
        if(inputRemove == wordE[i]){
            wordE.splice(i,1);
            wordV.splice(i,1);
        }
    }
    console.log(wordE);
    console.log(wordV);

}

function Display() {
    document.getElementById('number').innerHTML = 'Số từ trong từ điển là: ' + wordE.length;
    let e = '<hr/>';
    for(i=0;i<wordE.length;i++){
        e += wordE[i] + " = " + wordV[i] + '<br/>';
    }
    document.getElementById('result').innerHTML = e;
}