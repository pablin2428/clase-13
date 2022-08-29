var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score = 0
var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obtacle1 = loadImage("obstacle1.png")
  obtacle2 = loadImage("obstacle2.png")
  obtacle3 = loadImage("obstacle3.png")
  obtacle4 = loadImage("obstacle4.png")
  obtacle5 = loadImage("obstacle5.png")
  obtacle6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hola"+ 5)
  
}

function draw() {
  background(180);
  text("Puntuación: "+ score, 500,50); 
  score = score + Math.round(frameCount/60);

  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds();
  spawnObstacles();



  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    
    cloud.lifetime = 200
    
    
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles() {
 if (frameCount % 60 === 0) {
    obtacle = createSprite(600,165,10,40);
    obtacle.velocityX = -6;
    var ran = Math.round(random(1,6))
    obtacle.scale = 0.4;
    switch(ran){
      case 1:obtacle.addImage(obtacle1);
      break;
      case 2:obtacle.addImage(obtacle2);
      break;
      case 3:obtacle.addImage(obtacle3);
      break;
      case 4:obtacle.addImage(obtacle4);
      break;
      case 5:obtacle.addImage(obtacle5);
      break;
      case 6:obtacle.addImage(obtacle6);
      break;
    }
    
    
    obtacle.lifetime = 100
    
    
    obtacle.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}