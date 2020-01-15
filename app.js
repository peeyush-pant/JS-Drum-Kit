window.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  let audioElem = document.querySelector(`audio[data-key='${e.keyCode}']`);
  let buttonElem = document.querySelector(`div[data-key='${e.keyCode}']`);
  if(!audioElem) return;
  audioElem.currentTime = 0;
  audioElem.play();
  buttonElem.classList.add('playing');
}

function transitionComplete(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

Array.from(document.querySelectorAll('div.key'))
    .forEach(key => key.addEventListener('transitionend', transitionComplete));