function result() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    //height = parseInt(height);
    //weight = parseInt(weight);
    let total = weight/(height*height);
    console.log(parseInt(total));
    let Result;
    if(total < 16){
        Result = "BMI: " + "<16" + "- Rất Ốm" 
    }
    else if(total >=16 && total <17){
        Result = "BMI: " + "16-16.9" +"- Ốm"; 
    }
    else if(total >=17 && total<18.5){
        Result = "BMI: " + "17-18.4" +"- Ốm vừa";
    }  
    else if(total>=18.5 && total<25){
        Result = "BMI: " + "18.5-24.9" +"- Ngon đấy bn eiii";
    } 
    else if(total>=25 && total<30){
        Result = "BMI: " + "25-29.9" +"- Hơi mỡ đấy bn eiii";
    }
    else if(total>=30 && total<35){
        Result = "BMI: " + "30-34.9" +"- Bắt đầu mỡ hơn dồi đấy nhá";
    }
    else if(total>=35 && total<40){
        Result = "BMI: " + "35-39.9" +"- Mỡ lắm dồi đấy" + <img src = 'https://gamek.mediacdn.vn/133514250583805952/2020/3/25/photo-1-15851125175301222782197.jpg' width = '100' height = '100'>";
    }
    else if(total>=40){
        Result = "BMI: " + ">40" +"- Đi về tập gym ngayy cho ngon lại nhanh @@" + "<img src = 'https://gamek.mediacdn.vn/133514250583805952/2020/3/25/photo-1-15851125175301222782197.jpg' width = '100' height = '100'>";
    }

    document.getElementById("result").innerHTML = Result;
}