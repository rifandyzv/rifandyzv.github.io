const trigger = document.getElementById('send-me-message')
const modal = document.getElementsByClassName('modal')[0]
const close = document.getElementById('close')

trigger.onclick = function () {
  modal.style.display = 'block'
}

close.onclick = function () {
  modal.style.display = 'none'
}
