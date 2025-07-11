let btn = document
  .querySelector(".container button")
  .addEventListener("click", () => {
    fetch("love_letters.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let h1 = document.querySelector(".container h1");
        let random = Math.floor(Math.random() * data.length);
        h1.innerHTML = data[random];
      });
  });
let audio = document.querySelector(".audio");
let srcv = document.getElementById("ap");
audio.addEventListener("click", () => {
  if (srcv.paused) {
    srcv.play();
    audio.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>`;
  } else {
    srcv.pause();
    audio.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off-icon lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>`;
  }
});


const themeBtn = document.querySelector(".theme");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
});

themeBtn.addEventListener("click", () => {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});
