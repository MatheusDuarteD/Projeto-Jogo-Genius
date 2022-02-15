
// Gerando número/cor aleatório
function generateRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(5);
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

// Pegando o elemento html correto (de acordo com o valor) e redirecionando para a função que "acende" a cor
function getColor(arr){
  // O i é passado como parametro para evitar que as cores acendam ao mesmo tempo
  let i = 0
  for(let color of arr){
    
    element = getElement(color);
    highlightColor(element, Number(i) + 1);
    i++;
  }
}

// Fazendo a lógica de cor e valor e retornando a cor certa
function getElement(value){
  if(value === 1){
    return element = red;
  }
  else if(value === 2){
    return element = green;
  }
  else if(value === 3){
    return element = blue;
  }
  else if(value === 4){
    return element = yellow;
  }
}

// "Acendendo" a cor de acordo com o element passado
function highlightColor(element, time){

  time *= 500;
  setTimeout(() => {
    element.classList.add("selected");  
  }, time - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  }, time);
 
}

// Comparando as sequencias de click e cores
function compareSequence(){
  
  for(i = 0; i < clickSequence.length; i++){
  
    if(clickSequence[i] !== colorSequence[i]){
      lose();
      break;
    }
    
  }
  if(colorSequence.length == clickSequence.length && clickSequence[i] === colorSequence[i]){
    win();
  }
  
}

// Função chamada quando perde
function lose(){
  alert("Perdeu");
  score = 0;
  started = 0;
}

// Função chamada quando ganha
function win(){
  score++;
  alert("Passou de nível\nScore: " + score);
  startGame();
  
}

// Além de inserir o valor do click no array, ela também verifica se o jogo já foi iniciado ou não
function setClick(color){
  if(started === 1){
    clickSequence.push(color); 
    compareSequence();
  }
  else{
    alert("O jogo não começou ainda, clique em começar");
  }
}

// Função de começo de jogo, reseta tudo e chama as primeiras funções
function startGame(){
  
  colorSequence = [];
  clickSequence  = [];
  
  for(let i = 0; i < score + 1; i++){
    colorSequence.push(generateRandomNumber());
  }  
  
  getColor(colorSequence);  
  
}

let colorSequence = [];
let clickSequence = [];
let score = 0;
let red = document.querySelector("#top-left");
let green = document.querySelector("#top-right");
let blue = document.querySelector("#bottom-left");
let yellow = document.querySelector("#bottom-right");
let started = 0;

document.getElementById('comecar').addEventListener("click", () => {
  alert("O jogo vai começar");
  started = 1;
  startGame();
});

// Gravando os clicks e executando a comparação
red.addEventListener("click", () => {
  setClick(1);
});
green.addEventListener("click", () => {
  setClick(2);
});
blue.addEventListener("click", () => {
  setClick(3);
});
yellow.addEventListener("click", () => {
  setClick(4);
});

