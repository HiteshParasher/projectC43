var backImage,backgr;
var monkey,monkey_running;
var ground,ground_img;


var END =0;
var PLAY =1;
var gameState = PLAY;

bananaImage = loadImage("banana.png");
obstaceImage = loadImage("stone.png");

FoodGroup= new Group();
obstacleGroup= new Group();

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() {
  //background();
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10    ;
  }
  monkey.velocityY = monkey.velocityY + 0.2;
  monkey.collide(ground);
  
  
  ground.velocityX = -8 ;
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits();
 }
  
  if(World.frameCount%300===0){
    stones();
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score=score+1;
      }
  
 
 drawSprites();
  fill("white") ;
  text("Score:"+" "+ score, 500,50);
  
  


  drawSprites();
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  FoodGroup.add(banana);
}

function stones(){
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
}

