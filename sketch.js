var suporteamarelo, suporteverde, suportevermelho, suporteroxo;
var suporteamareloImg, suporteverdeImg, suportevermelhoImg, suporteroxoImg;
var suportevermelhoquebrado, suporteamareloquebrado;
var suportevermelhoquebradoImg, suporteamareloquebradoImg;
var cenario, left, right, upp;
var cenarioImg, setaImg;
var evelyn, evelynImg;
var invisibleBlock, invisibleblockGroup, bottomEdge;
var gameState = "play";
var score = 0;
var reiniciar, reiniciarImg, einiciar;


function preload(){
  cenarioImg = loadImage("cenario.png");
  evelynImg = loadAnimation("evelyn 1.png", "evelyn 2.png", "evelyn 3.png")
  setaImg = loadImage("seta para o lado.png");
  suporteamareloImg = loadImage("amarelo.png");
  suporteverdeImg = loadImage("verde.png");
  suporteroxoImg = loadImage("roxo.png");
  suportevermelhoImg = loadImage("vermelho.png");
  reiniciarImg = loadImage("reiniciar.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cenario = createSprite(600, 500);
  cenario.addImage("cenario",cenarioImg);
  cenario.velocityY = 1;
  cenario.scale = 10;

  invisibleblockGroup = new Group();
  suportes = new Group;

  bottomEdge = createSprite(600,580, 1000,50);
  bottomEdge.visible = false;

  upp = createSprite(600,8, 1000,50);
  upp.visible = false;

  right = createSprite(100,400, 50,1000);
  right.visible = false;

  left = createSprite(1100,100, 50,1000);
  left.visible = false;

  evelyn = createSprite(500,300,50,50);
  evelyn.scale = 1.4;
  evelyn.addAnimation("evelynnnnn", evelynImg);

  einiciar = createSprite(597,323,45,45);
  reiniciar = createSprite(600,323,10,10);
  einiciar.shapecolor = "blue";
  reiniciar.addImage("reiniciar", reiniciarImg);
  reiniciar.scale = 0.9;
}

function draw() {
background(0);
createEdgeSprites();
evelyn.collide(suportes);


if (gameState === "antes") {
  stroke("black");
  fill("blue");
  textSize(50);
  text("Bem vindo!", 470,280)

}

if (gameState === "play") {


  if(cenario.y > 500) {
    cenario.y = 350;
  } 

  
  if(keyDown("left")){
      evelyn.x = evelyn.x - 3;
  }

  if(keyDown("right")){

        evelyn.x = evelyn.x + 3;
  }

  if(keyDown("space")){

       evelyn.velocityY = -10; 
  }

evelyn.velocityY = evelyn.velocityY + 0.8;

einiciar.visible = false;
reiniciar.visible = false;


if (evelyn.isTouching(bottomEdge)) {
  gameState = "end"
  cenario.velocityY = 0;
}

if (evelyn.isTouching(right)) {
  gameState = "end"
  cenario.velocityY = 0;
}

if (evelyn.isTouching(upp)) {
  gameState = "end"
  cenario.velocityY = 0;
}

if (evelyn.isTouching(left)) {
  gameState = "end"
  cenario.velocityY = 0;
}


spawnsuportes();
drawSprites();


score = score + Math.round(getFrameRate()/60);
textSize(20);
fill("blue");
text("Pontuação: "+ score, 500,50);

}

if (gameState === "end"){
  drawSprites();
  stroke("black");
  fill("blue");
  textSize(50);
  text("Game Over", 470,280)
  suportes.destroyEach();
  evelyn.depth = cenario.depth;
  evelyn.depth = cenario.depth -1;


  reiniciar.addImage("reiniciar", reiniciarImg);
  reiniciar.scale = 0.9;

  einiciar.visible = true;
  reiniciar.visible = true;
  
  if (keyDown("enter")) {
    score = 0;
    evelyn.x = 500
    evelyn.y = 300
    evelyn.velocityY = 1;
    evelyn.depth = cenario.depth;
    evelyn.depth = cenario.depth + 1;
    cenario.velocityY = 1;
    gameState = "play";
  }
} 

}

function spawnsuportes() {

    var select_balloon = Math.round(random(1,6));
  
  if (World.frameCount % 150 == 0) {
    

    switch(select_balloon ){
      case 1:amarelo();
      break;
      case 2:roxo();
      break;
      case 3:verde();
      break;
      case 4:vermelho();
      break;
      default:break;
    }
  }
  }

  function amarelo() {
    suporteamarelo = createSprite(Math.round(random(200, 900)),100, 10, 10);
    suporteamarelo.addImage(suporteamareloImg);
    suporteamarelo.velocityY = 2;
    suporteamarelo.lifetime = 1500;
    suporteamarelo.scale = 0.5;
    evelyn.depth = suporteamarelo.depth;
    evelyn.depth = suporteamarelo.depth +1;

    suportes.add(suporteamarelo);

    
  }
  
  function verde() {
    suporteverde = createSprite(Math.round(random(200, 900)),100, 10, 10);
    suporteverde.addImage(suporteverdeImg);
    suporteverde.velocityY = 2;
    suporteverde.lifetime = 1500;
    suporteverde.scale = 0.5;
    evelyn.depth = suporteverde.depth;
    evelyn.depth = suporteverde.depth +1;

    suportes.add(suporteverde);
  }
  
  function roxo() {
    suporteroxo = createSprite(Math.round(random(200, 900)),100, 10, 10);
    suporteroxo.addImage(suporteroxoImg);
    suporteroxo.velocityY = 2;
    suporteroxo.lifetime = 1500;
    suporteroxo.scale = 0.5;
    evelyn.depth = suporteroxo.depth;
    evelyn.depth = suporteroxo.depth +1;

    suportes.add(suporteroxo);
  }

  function vermelho() {
    suportevermelho = createSprite(Math.round(random(200, 900)), 100, 10, 10);
    suportevermelho.addImage(suportevermelhoImg);
    suportevermelho.velocityY = 2;
    suportevermelho.lifetime = 1500;
    suportevermelho.scale = 0.5;
    evelyn.depth = suportevermelho.depth;
    evelyn.depth = suportevermelho.depth +1;
    
    suportes.add(suportevermelho);
  }

 

