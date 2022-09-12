document.body.addEventListener("mousemove", function(event) {
  moveCursor(event);
});

var svgCursor = document.getElementById('svg-cursor');
function moveCursor(e) {
  var x = e.clientX - 15,
      y = e.clientY - 15;
  svgCursor.setAttribute('style', 'left: ' + x + 'px; top: ' + y + 'px');
}

console.log(moveCursor)
console.log(x)