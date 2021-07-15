let physics = prompt("Nhập điểm môn vật lý");
let chemistry = prompt("Nhập điểm môn sinh học");
let biological = prompt("Nhập điểm môn sinh học");
physics = Number(physics);
chemistry = Number(chemistry);
biological = Number(biological);

let mean = (physics + chemistry + biological ) / 3;

document.write("Điểm trung bình của 3 môn là: "+ mean);