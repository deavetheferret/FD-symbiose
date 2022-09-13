document.addEventListener("mousemove", function (event) {
  moveCursor(event);
});

var svgCursor = document.getElementById("svg-cursor");
function moveCursor(e) {
  var x = e.clientX - 0,
      y = e.clientY - 0;
  svgCursor.setAttribute("style", "left: " + x + "px; top: " + y + "px");
  if (e.target.className.indexOf("custom-cursor") > -1) {
    switch (e.target.className) {
      case "custom-cursor custom-cursor--action":
        svgCursor.setAttribute("class", "svg-cursor svg-cursor__action");
        break;
      case "custom-cursor custom-cursor--close":
        svgCursor.setAttribute("class", "svg-cursor svg-cursor__close");
        break;
    }
  } else {
    svgCursor.setAttribute("class", "svg-cursor");
  }
}
console.log(moveCursor);

document.addEventListener("hovering", function (event) {
  onmouseover(event);
});

var button = document.querySelector('#button-index');

function hovering(event) {
  if (button = "hovering") {
    document.querySelector('.button-bg').classList.add('hovering-button')
  } else {
    document.querySelector('.button-bg').classList.remove('hovering-button')
  }
}

console.log(hovering)