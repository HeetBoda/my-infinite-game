var path;
var pathImg1;
var car;
var carImg1
var obstacle1,obstacle2,obstacle3;
var obstacleimg1,obstacleimg2,obstacleimg3;

var gameover,gameoverimg1

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
path_Img1=loadImage("Road.png");
car_Img1=loadImage("car.img.png");
obstacle_1=loadImage("obstacle car 2.png")
obstacle_2=loadImage("obstacle car 3.png")
gameover_1=loadImage("game over img1.png")


}

function setup() {
createCanvas(windowWidth,windowHeight)
path=createSprite(width/2,height/2)
path.addImage(path_Img1)
path.velocityY = 4;

car = createSprite(200,410,50,50)
car.addImage(car_Img1)
car.scale=0.4

obstaclesGroup=new Group();
}

function draw() {


if(gameState === PLAY){
car.x = World.mouseX;

 if(path.y > 400){
    path.y = height/2
    if(car.isTouching(obstaclesGroup)){
        gameState = END
    }
   
 }


createObstacle();

}
if(gameState === END){
gameover = createSprite(400,400)
gameover.addImage(gameover_1)
gameover.visible=true;
car.velocityY=0;
}
drawSprites();
}
function createObstacle(){
if(World.frameCount  % 100 == 0){
obstacle1 = createSprite(Math.round(random(10,400),40, 10, 10))
var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle1.addImage(obstacle_1);
              break;
      case 2: obstacle1.addImage(obstacle_2);
              break;
      
      default: break;
    }

obstacle1.scale=0.4
obstacle1.velocityY=4
obstacle1.lifetime=600
obstaclesGroup.add(obstacle1);
}
}






