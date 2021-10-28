var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var building1,building2,building3,b1Img,b2Img,b3Img
var lamp,lampImg
var blueBallon,blueBallonImg
var bird,birdImg
function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
b1Img=loadImage("assets/obsBottom1.png");
lampImg=loadImage("assets/obsBottom2.png");
blueBallonImg=loadImage("assets/obsTop1.png")

birdImg=loadImage("assets/obsTop2.png")

}

function setup(){
createCanvas(400,400)

bg = createSprite(165,485,1,1);
bg.velocityX= -3


bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

}


function spawnbuilding1() {

    
  if (frameCount % 200 === 0) {
   building1 = createSprite(600,355,40,10);
    
    building1.addImage(b1Img);
    building1.scale = 0.05;
    building1.velocityX = -3;
    
     
    building1.lifetime = 200;
    
   
    building1.depth = balloon.depth;
    balloon.depth = balloon.depth + 1;
    
    
    //cloudsGroup.add(building1);
  }
  
}


function spawnLamps (){

  if (frameCount % 275 === 0) {
    lamp = createSprite(600,355,40,10);
     
    lamp.addImage(lampImg);
     lamp.scale = 0.05;
     lamp.velocityX = -3;
     
      
     lamp.lifetime = 200;
     
    
   lamp.depth = balloon.depth;
     balloon.depth = balloon.depth + 1;

  }

}

function SpawnblueBallon () {

  if (frameCount % 180 === 0) {
    blueBallon=createSprite(600,355,40,10);
     
      blueBallon .addImage(blueBallonImg);
      blueBallon.scale = 0.05;
      blueBallon.velocityX = -3;
     
      
      blueBallon.lifetime = 200;
     
    
      blueBallon.depth = balloon.depth;
     balloon.depth = balloon.depth + 1;

  }




}

function spawnBird(){

  if (frameCount % 275 === 0) {
    bird = createSprite(600,355,40,10);
     
    bird. addImage(birdImg);
    bird.scale = 0.05;
    bird.velocityX = -3;
     
      
    bird.lifetime = 200;
     
    
    bird.depth = balloon.depth;
     balloon.depth = balloon.depth + 1;

  }




}






function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          
          }

          if (bg.x<0)
        bg.x = bg.width/2;
          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.3;
          spawnBird();
           SpawnblueBallon();
           spawnLamps();
           spawnbuilding1();
        drawSprites();
      
        
}