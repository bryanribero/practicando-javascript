const buttonEnter = document.getElementById('boton')
const buttonClose = document.getElementById('cerrarBoton')
const dialog = document.getElementById('modal')

buttonEnter.addEventListener('click', () => {
  dialog.showModal()
})

buttonClose.addEventListener('click', () => {
  dialog.close()
})
