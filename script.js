const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

//console.log(dino)

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    console.log("Pressionou espaço!");
    // retirada do keyCode.info
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  
  isJumping = true;
  let upInterval = setInterval(() => {
    // para movimentar intervalos, e definir o valor que quero,tempo
    if (position >= 150) {
      // uso a função, clearInterval, e limpo o tempo do pulo
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position = position - 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      //subir
      position = position + 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;


  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition <= -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
     // Game Over
     clearInterval(leftInterval)
     document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>'
    }else{
        cactusPosition = cactusPosition - 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  // função invocando ela mesma, efeito espelho, para sempre aparecer cactos na tela.
  setTimeout(createCactus,randomTime)
}



createCactus();
document.addEventListener("keyup", handleKeyUp);
//console.log('precionou uma tecla')
