let poin = '*';

for(i=0;i<5;i++){
    document.write('<br>');
    for(j=0;j<i+1;j++){
        document.write(poin);
    }
}

document.write('<br>');
for(i=0;i<5;i++){
    document.write('<br>');
    for(j=i;j<5;j++){
        document.write(poin);
    }
}

for(i=0;i<5;i++){
    document.write('<br>');
    for(j=5;j>i;j--){
        document.write("&nbsp");
    }
    for(j=0;j<i+1;j++){
        document.write(poin);
    }
}
document.write('<br>')
for(i=0;i<5;i++){
    document.write('<br>');
    for(j=i;j>=0;j--){
        document.write("&nbsp");
    }
    for(j=5;j>i;j--){
        document.write(poin);
    }
}