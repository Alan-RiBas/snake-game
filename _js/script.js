let canvas = document.getElementById("snake"); //chama o canvas do html para o JS.
let context = canvas.getContext("2d"); //cria a dimenção do canvas para ser renderizado.
let box = 32; //limita a quantidade de pixels.
let snake = []; //cria a cobra e seus tamanho.
snake[0] = {
  x: 8 * box,   //cria a cobra e seus tamanho.
  y: 8 * box
};              //cria a cobra e seus tamanho.

let direction = "right"; //definindo direções.
let food = {                                    //stando como a comida vai nascer.
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
};


function criarBG(){
  context.fillStyle = "lightgreen";           //Chama uma cor para o Canvas/Context.
  context.fillRect(0, 0, 16 * box, 16 * box); //Cria um tamanho para o Canvas/Context.
};

function criarSnake(){                                  //Seta o movimento de caminhar.
  for(i=0; i < snake.length; i++){                      //Seta o movimento de caminhar.
    context.fillStyle = "green"                         //Seta uma cor para a Snake.
    context.fillRect(snake[i].x, snake[i].y, box, box); //Seta o tamanho que o caminhar ocupa.
  }
};
  
function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
};
  
document.addEventListener('keydown', update); //criando Evento.

function update(event){
  if(event.keyCode == 37 && direction != "right") direction = "left"; //os numeros são os codigos das teclas,
  if(event.keyCode == 38 && direction != "down") direction = "up";    //como o jogo da cobrinha não pode caminhar para traz
  if(event.keyCode == 39 && direction != "left") direction = "right"; // acrescenta um condição para ele ir para,
  if(event.keyCode == 40 && direction != "up") direction = "down";    //outro lado.
};
  


function iniciarJogo(){
  
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
  
  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo)
      alert("Game Over :( ");
    }
  }
  
  criarBG();
  criarSnake();
  drawFood();
  
  
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;  
  
  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;
  
  if(snakeX != food.x || snakeY != food.y){
      snake.pop();
    
  }else{
    food.x = Math.floor(Math.random() * 15 + 1) * box,
    food.y = Math.floor(Math.random() * 15 + 1) * box
  }
  
  
  let newHead = {
    x: snakeX,
    y: snakeY
  };
  
  snake.unshift(newHead); //primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);
    
    