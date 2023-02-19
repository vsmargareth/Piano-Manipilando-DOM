//Get all keys
//1° selecionar todas as teclas brancas e pretas
const keys = document.querySelectorAll(".key")

//toda vez que clicarmos ou pressionarmos alguma tecla ele executará essa função. Play notes
function playNote(event) {
  let audioKeyCode = getKeyCode(event)
  const key = document.querySelector(`[data-divkey="${audioKeyCode}"]`)

  //verificando se a tecla existe
  const isKeyExists = key;
  if (!isKeyExists) {
    return
  }
  addPlayingClass(key)
  playAudio(audioKeyCode)

}

function getKeyCode(event) {
  let localDoEvento;

  const houveEvento = event.type === "keydown" //bolean 
  if (houveEvento) {
    localDoEvento = event.keyCode
  } else {
    localDoEvento = event.target.dataset.divkey
  }
  return localDoEvento
}
//Tocando audio
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-divkey="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()

}

function addPlayingClass(key) {
  key.classList.add('playing')
}
function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

//click with mouse / quando clicarmos em algum ponto da tela
// keys.forEach(function (key) {
window.addEventListener("click", playNote)
window.addEventListener("transitionend", removePlayingClass)
// })


//quando alguma tecla for pressionada
window.addEventListener("keydown", playNote);