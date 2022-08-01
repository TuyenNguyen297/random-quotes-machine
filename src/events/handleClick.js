export default function handleClick() {
  const random = (hex) => "#".concat(Math.floor(Math.random() * parseInt(hex, 16)).toString(16));
  let randomColor = random("FFFFFF");
  let element = document.querySelectorAll("body,a,button,figure");
  for (let i = 0; i < element.length; i++) {
    if (/figure/gi.test(element[i].tagName)) {
      element[i].style.color = randomColor;
    } else {
      element[i].style.backgroundColor = randomColor;
    }
  }
}
