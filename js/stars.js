// Tạo các ngôi sao nền
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 2 + "s";
  document.body.appendChild(star);
}
