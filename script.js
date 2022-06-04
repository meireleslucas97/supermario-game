
const mariomoving = document.querySelector ('.mariomoving');
const pipe = document.querySelector ('.pipe');
const nuvem = document.querySelector ('.nuvem');

const jump = () => {
    mariomoving.classList.add('jump');

    setTimeout(() => {

        mariomoving.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const marioPosition = +window.getComputedStyle(mariomoving).bottom.replace('px', '');

    
    if (pipePosition <= 120 && pipePosition > 92 && marioPosition < 173) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mariomoving.style.animation = 'none';
        mariomoving.style.bottom = `${marioPosition}px`;

        mariomoving.src = 'imagens/game-over.png';
        mariomoving.style.width = '75px'
        mariomoving.style.marginLeft = '50px'

        nuvem.style.animation = 'paused';
        nuvem.style.left = `${nuvemPosition}px`;

        clearInterval(loop);

        
    }

   
}, 10);

document .addEventListener('keydown', jump);