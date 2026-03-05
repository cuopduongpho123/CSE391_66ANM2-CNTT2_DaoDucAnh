const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

greeting.textContent = "Xin hãy nhập tên của bạn.";

nameInput.addEventListener("input", function () {
  const value = nameInput.value;

   if (value) {
    greeting.textContent = "Xin chào, " + value + "!";
  } else {
    greeting.textContent = "Xin chào! Vui lòng nhập tên.";
  }
});