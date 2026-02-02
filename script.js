const screens = document.querySelectorAll(".screen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let noCount = 0;

/* Screen switch */
function show(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* NO button logic */
noBtn.onclick = () => {
  noCount++;
  yesBtn.style.transform = `scale(${1 + noCount * 0.25})`;
  noBtn.style.transform = `scale(${1 - noCount * 0.1})`;
};

/* YES button */
yesBtn.onclick = () => {
  music.currentTime = 0;
  music.play();

  show("screen2");
  fireworks();
  hearts();

  setTimeout(() => {
    show("screen3");
  }, 3000);
};

/* Fireworks (IMAGE) */
function fireworks() {
  for (let i = 0; i < 14; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 80 + "vh";
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 1800);
  }
}

/* Floating hearts */
function hearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 350);
}

/* Envelope click */
document.getElementById("envelope").onclick = () => {
  show("screen4");
  typeLetter();
};

/* Letter typing */
const text = `My dear Chikki,

From the very first smile
to this beautiful moment…

In every universe,
every lifetime,
every reality —

I choose YOU ❤️

Through laughter,
through fights,
through everything life brings…

Will you stay with me forever?`;

function typeLetter() {
  let i = 0;
  const el = document.getElementById("typedText");
  el.innerHTML = "";

  const interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 35);
}

/* Next to universe */
document.getElementById("nextBtn").onclick = () => {
  show("screen5");
};

/* Universe slides */
const slides = [
  "👽❤️👽",
  "🐯❤️🐯",
  "🐵❤️🐵",
  "👩‍❤️‍👨",
  "🤖❤️🤖",
  "🎨❤️🎨",
  "👨‍👩‍👧❤️",
  "🐠❤️🐠",
  "🤖❤️🤖",
  "🐶❤️🐶"
];

let idx = 0;
const slide = document.getElementById("slide");
slide.innerText = slides[0];

document.getElementById("nextSlide").onclick = () => {
  idx = (idx + 1) % slides.length;
  slide.innerText = slides[idx];
};
