const btn = document.getElementById("btn");
const message = document.getElementById("message");
const film = document.getElementById("film");

btn.addEventListener("click", () => {
  // Hiển thị film và message
  film.classList.remove("hidden");
  message.classList.remove("hidden");

  // Kích hoạt hiệu ứng sau 100ms để đảm bảo render
  setTimeout(() => {
    film.classList.add("show-film");
    message.classList.add("show");
  }, 100);

  btn.textContent = "🎬 Ký ức bắt đầu 🎬";
  btn.disabled = true;
  setTimeout(() => (btn.disabled = false), 1000);

  // Tạo 80 trái tim rơi
  for (let i = 0; i < 80; i++) {
    setTimeout(createHeart, i * 70);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  const icons = ["💖", "✨", "🎉", "💗", "🎂"];
  heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  heart.classList.add("heart");

  heart.style.left = Math.random() * 90 + 5 + "vw";

  const duration = Math.random() * 3 + 4;
  heart.style.animationDuration = duration + "s";
  heart.style.fontSize = Math.random() * 20 + 18 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}
