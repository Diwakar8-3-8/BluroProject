/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;*/
//Declare all the variables
var bluro2;
var ast1, ast2, ast3, ast4;
var bomb1, bomb2, bomb3, bomb4;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8;
var border;
var edges;

function preload()
{
  bluro2Image = loadImage("Bluro2.png");
  astImage = loadImage("Ast2.png");
  blastImage = loadImage("blast.png");
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coins.png");
}
function setup() {
  createCanvas(1280,610);
 // engine = Engine.create();
  //world = engine.world;

  bd1 = createSprite(640,20,1240,10);
  bd1.shapeColor ="white";
  bd2 = createSprite(640,590,1240,10);
  bd2.shapeColor ="white";
  bd3 = createSprite(20,305,10,580);
  bd3.shapeColor ="white";
  bd4 = createSprite(1260,305,10,580);
  bd4.shapeColor ="white";

 
  bluro2 = createSprite(500,500,70,70);
  bluro2.addImage("hero",bluro2Image);
  bluro2.scale = 0.5;


  ast1 = createSprite(110,110,175,150);
  ast1.addImage("ast",astImage);
  ast1.scale = 0.2;
  ast2 = createSprite(1160,110,175,150);
  ast2.addImage("ast",astImage);
  ast2.scale = 0.2;
  ast3 = createSprite(110,500,175,150);
  ast3.addImage("ast",astImage);
  ast3.scale = 0.2;
  ast4 = createSprite(1160,500,175,150);
  ast4.addImage("ast",astImage);
  ast4.scale = 0.2;

  
  bomb1 = createSprite(250,150,120,120);
  bomb1.addImage("bombs",bombImage);
  bomb1.scale = 0.2;
  bomb2 = createSprite(1020,150,120,120);
  bomb2.addImage("bombs",bombImage);
  bomb2.scale = 0.2;
  bomb3 = createSprite(250,500,120,120);
  bomb3.addImage("bombs",bombImage);
  bomb3.scale = 0.2;
  bomb4 =createSprite(1020,500,120,120);
  bomb4.addImage("bombs",bombImage);
  bomb4.scale = 0.2;

  
  coin1 = createSprite(630,60,25);
  coin1.addImage("coins",coinImage);
  coin1.scale = 0.2;
  coin2 = createSprite(630,550,25);
  coin2.addImage("coins",coinImage);
  coin2.scale = 0.2;
  coin3 = createSprite(60,295,25);
  coin3.addImage("coins",coinImage);
  coin3.scale = 0.2;
  coin4 = createSprite(1220,295,25);
  coin4.addImage("coins",coinImage);
  coin4.scale = 0.2;
  coin5 = createSprite(660,60,25);
  coin5.addImage("coins",coinImage);
  coin5.scale = 0.2;
  coin6 = createSprite(660,550,25);
  coin6.addImage("coins",coinImage);
  coin6.scale = 0.2;
  coin7 = createSprite(60,325,25);
  coin7.addImage("coins",coinImage);
  coin7.scale = 0.2;
  coin8 = createSprite(1220,325,25);
  coin8.addImage("coins",coinImage);
  coin8.scale = 0.2;

 
  ast1.velocityX = 1;
  ast1.velocityY = 1;

  ast2.velocityX = 1;
  ast2.velocityY = 1;

  ast3.velocityX = 1;
  ast3.velocityY = 1;

  ast4.velocityX = 1;
  ast4.velocityY = 1;


  
  //Engine.run(engine);
}


function draw() {
  background("#003b59"); 

  if(keyDown("UP_ARROW")){
    bluro2.velocityY = -1;
  }

  if(keyDown("DOWN_ARROW")){
    bluro2.velocityY = 1;
  }

  if(keyDown("RIGHT_ARROW")){
    bluro2.velocityX = 1;
  }

  if(keyDown("LEFT_ARROW")){
    bluro2.velocityX = -1;
  }
  edges = createEdgeSprites();
  ast1.bounceOff(edges);
  ast2.bounceOff(edges);
  ast3.bounceOff(edges);
  ast4.bounceOff(edges);
  bluro2.bounceOff(edges);
  bomb1.bounceOff(edges);
  bomb2.bounceOff(edges);
  bomb3.bounceOff(edges);
  bomb4.bounceOff(edges);

  ast1.bounceOff(bd1);
  ast1.bounceOff(bd2);
  ast1.bounceOff(bd3);
  ast1.bounceOff(bd4);
  
  ast2.bounceOff(bd1);
  ast2.bounceOff(bd2);
  ast2.bounceOff(bd3);
  ast2.bounceOff(bd4);

  ast3.bounceOff(bd1);
  ast3.bounceOff(bd2);
  ast3.bounceOff(bd3);
  ast3.bounceOff(bd4);

  ast4.bounceOff(bd1);
  ast4.bounceOff(bd2);
  ast4.bounceOff(bd3);
  ast4.bounceOff(bd4);

  bluro2.bounceOff(ast1);
  bluro2.bounceOff(ast2);
  bluro2.bounceOff(ast3);
  bluro2.bounceOff(ast4);

  bluro2.bounceOff(bd1);
  bluro2.bounceOff(bd2);
  bluro2.bounceOff(bd3);
  bluro2.bounceOff(bd4);

  bomb1.bounceOff(bd1);
  bomb1.bounceOff(bd2);
  bomb1.bounceOff(bd3);
  bomb1.bounceOff(bd4);
  
  bomb2.bounceOff(bd1);
  bomb2.bounceOff(bd2);
  bomb2.bounceOff(bd3);
  bomb2.bounceOff(bd4);

  bomb3.bounceOff(bd1);
  bomb3.bounceOff(bd2);
  bomb3.bounceOff(bd3);
  bomb3.bounceOff(bd4);

  bomb4.bounceOff(bd1);
  bomb4.bounceOff(bd2);
  bomb4.bounceOff(bd3);
  bomb4.bounceOff(bd4);

  ast1.bounceOff(ast2);
  ast1.bounceOff(ast3);
  ast1.bounceOff(ast4);
  ast2.bounceOff(ast1);
  ast2.bounceOff(ast3);
  ast2.bounceOff(ast4);
  ast3.bounceOff(ast1);
  ast3.bounceOff(ast2);
  ast3.bounceOff(ast4);
  ast4.bounceOff(ast1);
  ast4.bounceOff(ast2);
  ast2.bounceOff(ast3);
      

  drawSprites();
  }

  /*function keyPressed(){
    
  }*/

