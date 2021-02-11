
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivaltime;
var background;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600,60)
  score=0;
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
 
   
  

   ground=createSprite(300,350,1200,10);

  
  console.log(ground.x)
  
 bananagroup= new Group();
  stonegroup= new Group();
  
}


function draw() {
 background("green")
  

 if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
 }
  monkey.velocityY=monkey.velocityY+0.5
  
  if(ground.x<0){
    ground.x=300;
  }
   ground.velocityX = -(4 + 3* score/100)
    //scoring
    
    
  spawnbanana();
 spawnobstacles();
  monkey.collide(ground);
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("white");
  text ("Score:"+ score,500,50)
  
if(bananagroup.isTouching(monkey)){
  score=score+2
  bananagroup.destroyEach();
}
  if(stonegroup.isTouching(monkey)){
    text("gameover",200,300);
    stonegroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
    ground.velocityX=0
    stonegroup.setLifetimeEach(-1);
  }
  switch(score){
    case 10:
      monkey.scale=0.12;
    case 20:
      monkey.scale=0.14;
    case 30:
      monkey.scale=0.16;
    case 40:
      monkey.scale=0.20;
  }
    
  

  drawSprites();
  
  
  
  stroke("black");
  
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time:"+ survivalTime,100,50);
  
  
}
  function spawnbanana(){
 if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
   banana.addImage("banana20",bananaImage);
   banana.velocityX = -(6 + score/100);
    banana.scale=0.1;
        banana.lifetime=300;
   bananagroup.add(banana);
        
    }
  }
function spawnobstacles(){
 if (frameCount % 70 === 0){
   var obstacle = createSprite(650,330,10,40);
   obstacle.addImage(obstacleImage);
  obstacle.velocityX = -(6 + score/100);
    obstacle.scale=0.1;
        obstacle.lifetime=300;
   stonegroup.add(obstacle);
        
    }
  
  }

