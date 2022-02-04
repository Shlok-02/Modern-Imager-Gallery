var imgs = document.querySelectorAll(".imgs img");
var len = imgs.length;
var display = document.querySelector(".main-img img");
imgs[0].style.opacity = 0.4;

for (let i = 0; i < len; i++) {
  imgs[i].addEventListener("click", (e) => {
    imgs.forEach((img) => (img.style.opacity = 1));
    var ans = imgs[i].getAttribute("src");
    display.src = ans;
    imgs[i].style.opacity = 0.4;
  });
}
