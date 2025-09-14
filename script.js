const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    close.style.display = "block"; // hiện nút X khi mở menu
    bar.style.display = "none"; // ẩn nút bar khi menu mở
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    close.style.display = "none"; // ẩn nút X khi đóng menu
    bar.style.display = "block"; // hiện lại nút bar
  });
}
