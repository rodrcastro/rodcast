const button = document.querySelector('button')

button.addEventListener('mouseover', onMouseOver)

function onMouseOver() {
  const button = document.querySelector('button')
  button.style.top = Math.random() * window.innerHeight + 'px'
  button.style.bottom = Math.random() * window.innerWidth + 'px'
  button.style.right = Math.random() * window.innerWidth + 'px'
}