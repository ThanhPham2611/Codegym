// //In ra điểm
// let diem = "*";
// document.write(diem);

// //In ra đoạn thẳng dài 10 điểm
// let diem = "*";
// let i = 1;
// while (i<=10) {
//     document.write(diem + "");
//     i++;
// }

// //in ra 5 đoạn thẳng chồng lên nhau
// let diem = "*";
// let i = 1;
// let j = 1;
// while (j<=5) {
//     while (i<=10) {
//         document.write(diem + "");
//         i++;
//     }
//         document.write("<br>")
//         i = 1;
//         j++;
// }

// //Hỏi người dùng chiều cao và chiều rộng trước khi in
// let CD = prompt ("Nhập chiều dài");
// let CR = prompt ("Nhập chiều rộng");
// let diem = "*";
// let i = 1;
// let j = 1;
// while (j <= CR) {
//     while (i <= CD) {
//         document.write(diem + "");
//         i++;
//     }
//     document.write("<br>")
//     i = 1;
//     j++;
// }

// //Hỏi người dùng muốn in bằng ký tự nào trước khi in
// let CD = prompt ("Nhập chiều dài");
// let CR = prompt ("Nhập chiều rộng");
// let diem = prompt("Nhập kí tự");
// let i = 1;
// let j = 1;
// while (j <= CR) {
//     while (i <= CD) {
//         document.write(diem + "");
//         i++;
//     }
//     document.write("<br>");
//     i = 1;
//     j++;
// }

// //Vẽ hình chữ nhật rỗng
// let CD = prompt ("Nhập chiều dài");
// let CR = prompt ("Nhập chiều rộng");
// let diem = prompt("Nhập kí tự");
// let i = 1;
// let j = 1;
// while (j <= CR) {
//     while (i <= CD) {
//         if (j == 1 || i == 1 || j == CR || i == CD) {
//             document.write(diem);
//         } else {
//             document.write("&nbsp" + "&nbsp");
//         }
//         i++;
//     }
//     document.write("<br>")
//     i = 1;
//     j++;
// }