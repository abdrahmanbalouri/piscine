export let createCircle = () => {
  document.body.addEventListener("mousedown", (e) => {
    let div = document.createElement("div");
    div.className ='circle'
    div.style.left = e.clientX - 25 + "px";
    div.style.top = e.clientY - 25 + "px";
    div.style.background = "white";
    document.body.appendChild(div);
  });
};
export let moveCircle = () => {
  document.body.addEventListener("mousemove", (e) => {
    let circle = document.querySelectorAll(".circle");

    if (circle.length > 0) {
      const { style } = circle[circle.length - 1];
      style.top = e.clientY - 25 + "px";
      style.left = e.clientX - 25 + "px";
    }
  });
};
export let setBox = () => {
  let box = document.createElement("div");

  box.className = 'box';
  document.body.append(box);
  addEventListener("mousemove", (e) => {
    let circle = document.querySelectorAll(".circle");
    let boxPosition = box.getBoundingClientRect();
    if (circle.length > 0) {
      let last = circle[circle.length - 1];
      if (
        e.clientX > boxPosition.left + 25 &&
        e.clientX < boxPosition.right - 25 &&
        e.clientY > boxPosition.top + 25 &&
        e.clientY < boxPosition.bottom - 25
      ) {
        last.style.background = "var(--purple)";
      }
      if (last.style.background == "var(--purple)") {
        if (e.clientX < boxPosition.left + 25) {
          last.style.left = boxPosition.left + "px";
        }
        if (e.clientX > boxPosition.right - 25) {
          last.style.left = boxPosition.right - 50 + "px";
        }
        if (e.clientY < boxPosition.top + 25) {
          last.style.top = boxPosition.top + "px";
        }
        if (e.clientY > boxPosition.bottom - 25) {
          last.style.top = boxPosition.bottom - 50 + "px";
        }
      }
    }
  });
};