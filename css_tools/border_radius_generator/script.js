let box = document.querySelector(".rs");

let btn1 = document.querySelector(".btn1"); // top
let btn2 = document.querySelector(".btn2"); // right
let btn3 = document.querySelector(".btn3"); // bottom
let btn4 = document.querySelector(".btn4"); // left
let code = document.querySelector("code");
let isDragging = false;
let activeBtn = null;
let offsetPos = 0;

let a = 0,
  b = 0,
    c = 0,
  aa ,
  d = 0;

const startDrag = (btn, axis, e) => {
  isDragging = true;
  activeBtn = { btn, axis };

  if (axis === "x") {
    offsetPos = e.clientX - btn.offsetLeft;
  } else if (axis === "y") {
    offsetPos = e.clientY - btn.offsetTop;
  }
};

const duringDrag = (e) => {
  if (!isDragging || !activeBtn) return;

  const { btn, axis } = activeBtn;

  if (axis === "x") {
    let x = e.clientX - offsetPos;
    let maxX = box.clientWidth - btn.offsetWidth;
    x = Math.max(0, Math.min(x, maxX));
    btn.style.left = `${x}px`;

    if (btn === btn1) {
      a = Math.round((x / maxX) * 100);
    }
    if (btn === btn3) {
      c = Math.round((x / maxX) * 100);
    }
  }

  if (axis === "y") {
    let y = e.clientY - offsetPos;
    let maxY = box.clientHeight - btn.offsetHeight;
    y = Math.max(0, Math.min(y, maxY));
    btn.style.top = `${y}px`;

    if (btn === btn2) {
      b = Math.round((y / maxY) * 100);
    }
    if (btn === btn4) {
      d = Math.round((y / maxY) * 100);
    }
  }

  box.style.borderRadius = `${a}% ${b}% ${c}% ${d}%`;
    code.innerText = `border-radius: ${a}% ${b}% ${c}% ${d}%`;
    aa = `border-radius: ${a}% ${b}% ${c}% ${d}%`;
};

const endDrag = () => {
  isDragging = false;
  activeBtn = null;
};

btn1.addEventListener("mousedown", (e) => startDrag(btn1, "x", e)); // Top (a)
btn2.addEventListener("mousedown", (e) => startDrag(btn2, "y", e)); // Right (b)
btn3.addEventListener("mousedown", (e) => startDrag(btn3, "x", e)); // Bottom (c)
btn4.addEventListener("mousedown", (e) => startDrag(btn4, "y", e)); // Left (d)

document.addEventListener("mousemove", duringDrag);
document.addEventListener("mouseup", endDrag);

code.addEventListener("click", () => {
  window.navigator.clipboard.writeText(aa.toString()).then(() => {
    code.innerText = `${aa} (copied!)`;
    setTimeout(() => {
      code.innerText = aa;
    }, 2000);
  });
});