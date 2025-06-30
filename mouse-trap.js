export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  document.body.append(box);
}

export function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.style.background = 'white';
    circle.className = 'circle';
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.left = `${event.clientX - 25}px`;
    document.body.append(circle);
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', (event) => {
    let circles = document.querySelectorAll('.circle');
    if (circles.length === 0) return;

    let last = circles[circles.length - 1];
    let box = document.querySelector('.box');
    if (!box) return;
    let boxp = box.getBoundingClientRect();

    const circleRadius = 25;
    const wallThickness = 1;
    const safeDistance = circleRadius + wallThickness;

    if (!last.parentNode.classList.contains('box')) {
      if (
        event.clientX > boxp.left + safeDistance &&
        event.clientX < boxp.right - safeDistance &&
        event.clientY > boxp.top + safeDistance &&
        event.clientY < boxp.bottom - safeDistance
      ) {
        last.style.background = 'var(--purple)';
        box.append(last);
      } else {
        last.style.background = 'white';
        last.style.top = `${event.clientY - circleRadius}px`;
        last.style.left = `${event.clientX - circleRadius}px`;
      }
    } else {

      let boxLeft = boxp.left + safeDistance;
      let boxTop = boxp.top + safeDistance;
      let boxRight = boxp.right - safeDistance;
      let boxBottom = boxp.bottom - safeDistance;

      let x = event.clientX;
      let y = event.clientY;

      if (x < boxLeft) x = boxLeft;
      if (x > boxRight) x = boxRight;
      if (y < boxTop) y = boxTop;
      if (y > boxBottom) y = boxBottom;

      last.style.left = `${x - circleRadius}px`;
      last.style.top = `${y - circleRadius}px`;
    }
  });
}
