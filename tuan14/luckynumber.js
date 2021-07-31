function Lucky() {
    let numLonNhat = Number(prompt("Người chơi nhập số, máy tính bắt đầu từ (1->số người chơi nhập): "));
    let numRand = Math.floor((Math.random() * numLonNhat)+ 1);
    let i=3;
    while(i>=0){
        alert('Số lượt đoán còn: '+ i--);
        let numDoan = Number(prompt("Người dùng nhập con số muốn đoán: "));
        if(numDoan<numRand){
            alert('Con số bạn đoán bé hơn con số ngẫu nhiên');
        }
        else if(numDoan>numRand){
            alert('Con số bạn đoán lớn hơn con số ngẫu nhiên');
        }
        else if(numDoan == numRand){
            alert('Bạn đoán chính xác');
            break;
        }
    }
}