
// for(i=0;i<number1.length;i++){
    //     for(j=0;j<number1[i].length;j++){
        //         //total += number1[i][j];
        //     }
        // }
        
//duyệt cột
for(let cot=0;cot<number1[0].length;cot++){
    let total = 0;
    for(j=0;j<number1.length;j++){
        total += number1[j][i];
    }
    console.log(total);
}


let number1 = [
    [1,2,3,4,5],
    [6,7,8,9,10]
];
for(i=0;i<number1.length;i++){
    let total=0;
    for(j=0;j<number1[i].length;j++){
        total += number1[i][j];
    }
    console.log(total);
}

