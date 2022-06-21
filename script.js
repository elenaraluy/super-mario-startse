const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const goomba = document.querySelector(".goomba-game");
const alerta = document.querySelector("alerta");
audioStart = new Audio("./audio/intro.mp3");
audioGameOver = new Audio("./audio/game-over.mp3");

const start = () => {
  audioStart.play();
};

document.addEventListener("keydown", start);

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imgs/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);

    document.getElementById("alerta").style.color = "red";
    document.getElementById("alerta").style.fontSize = "70px";
    document.getElementById("alerta").style.paddingTop = "200px" 
    document.getElementById("alerta").innerHTML="<strong>GAME OVER</strong>";


    function stopAudioStart() {
      audioStart.pause();
    }
    stopAudioStart();

    audioGameOver.play();
  }
}, 10);

document.addEventListener("keydown", jump);

const loopGameSecond = setInterval(() => {
  const goombaPosition = goomba.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (goombaPosition <= 110 && goombaPosition > 0 && marioPosition < 60) {
    goomba.style.animation = "none";
    goomba.style.left = `${goombaPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imgs/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGameSecond);


    document.getElementById("alerta").style.color = "red";
    document.getElementById("alerta").style.fontSize = "70px";
    document.getElementById("alerta").style.paddingTop = "200px" 
    document.getElementById("alerta").innerHTML="<strong>GAME OVER</strong>";


    function stopAudioStart() {
      audioStart.pause();
    }
    stopAudioStart();

    audioGameOver.play();
  }
}, 10);

document.addEventListener("keydown", jump);
