var cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', function(e) {
  const x = e.clientX
  const y = e.clientY
  
  cursor.style.left = x - 0 + 'px'
  cursor.style.top = y - 0 + 'px'
})