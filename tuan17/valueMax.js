let number = [10,11,4,5,20,6];
let index = 0;
let max = number[0];
for(i=0;i<number.length;i++){
    if(number[i]>max){
        max = number[i];
        index = i;
    }
}
alert("Vị trí lớn nhất ở trong mảng là vị trí thứ " + index + " có giá trị là: " + max);