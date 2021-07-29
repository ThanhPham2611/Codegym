function check() {
    let Can = document.getElementById("year").value;
    let Chi = document.getElementById("year").value;
    if(Can == null || Chi == null){
        alert('Nhập năm')
    }
    else{
        switch(Can%10){
            case 0:
                Can = 'Canh';
                break;
            case 1:
                Can = 'Tân';
                break;
            case 2:
                Can = 'Nhâm';
                break;
            case 3:
                Can = 'Quý';
                break;
            case 4:
                Can = 'Giáp';
                break;
            case 5:
                Can = 'Ất';
                break;
            case 6: 
                Can = 'Bính';
                break;
            case 7:
                Can = 'Đinh';
                break;
            case 8:
                Can = 'Mậu';
                break;
            case 9:
                Can = 'Kỷ';
                break;                                            
        }
        switch(Chi%12){
            case 0:
                Chi = ' Thân';
                break;
            case 1:
                Chi = ' Dậu';
                break;
            case 2:
                Chi = ' Tuất';
                break;
            case 3:
                Chi = ' Hợi';
                break;
            case 4: 
                Chi = ' Tý';
                break;
            case 5:
                Chi = ' Sửu';
                break;
            case 6:
                Chi = ' Dần';
                break;
            case 7:
                Chi = ' Mão';
                break;
            case 8: 
                Chi = ' Thìn';
                break;
            case 9:
                Chi = ' Tỵ';
                break;  
            case 10:
                Chi = ' Ngọ';
                break;
            case 11:
                Chi = ' Mùi';
                break;                                          
        }
    }
    
    document.getElementById("result").innerHTML = "Năm Âm Lịch: " + Can + Chi;
}