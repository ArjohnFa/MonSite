

function playSound(e) {
    console.log(e.keyCode);

    let son = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    let touch = document.querySelector('div[data-key="' + e.keyCode + '"]');


    if(son == null) {
        return;
    }

    son.currentTime = 0;
    son.play();

    touch.classList.add('selection');
}

function endTransition() {
    this.classList.remove("selection")
}

let notes = document.querySelectorAll('.note');
window.addEventListener('keydown', playSound);




for (let i = 0; 1 < notes.length; i++) {
    notes[i].addEventListener('transitionend', endTransition);
}