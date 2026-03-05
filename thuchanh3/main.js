console.log("Hello from JavaScript!");
let name = "Duc Anh";
let yearOfBirth = 2006;
let currentYear = 2026;
let age = currentYear - yearOfBirth;
let score = 6;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");

function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

tinhDiemTrungBinh(8, 7, 9);

function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
  if(score >= 8){
    console.log("Giỏi");
  } else if(score >= 6.5){
    console.log("Khá");
  } else if(score >= 5){
    console.log("Trung bình");
  } else{
    console.log("Yếu");
  }
}

let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});