function Bank() {
    let money = prompt("Nhập số tiền gửi: ");
    let inTerest = prompt("Nhập lãi suất: ");
    let year = prompt("Nhập số năm: ");
    let interestRate;
    money = Number(money);
    //inTerest = Number(inTerest);
    interestRate = Number(interestRate);
    year = Number(year);
    interestRate = (money*inTerest)/100;
    let total = money+interestRate;
    total = Number(total);
    alert('Số tiền ' + money + ' được gửi trong ' + year + ' năm ' + 'với lãi xuất '+ inTerest + ' có tổng tiền tính theo lãi xuất đơn là: ' + total + 'VND');
}
