var player,player_running
var bg1
var ground
var platformSprite,platformGroup,platformImg
var groundImg
var form
var gameState=0



function preload(){
bg1=loadImage("sprites/bg.jpg")
groundImg=loadImage("sprites/ground.png")
platformImg=loadImage("sprites/platform.png")
player_running = loadAnimation("sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png");
}


function setup(){
createCanvas(1400,700)

ground=createSprite(600,height,1800,20)
ground.visible=true;
ground.velocityX=-5
ground.x=ground.width/2;
ground.addImage(groundImg)

player=createSprite(200,200,30,30)
player.addAnimation("Running",player_running);

form = new Form();

platformGroup = new Group();
}


function draw(){
form.display();

if(gameState===1){
  form.hide();
background(bg1)

player.velocityY = player.velocityY + 0.8;

if(ground.x<700){
  ground.x=ground.width/2;
}

player.collide(ground);
platformGroup.collide(player);
platformGroup.collide(ground);

movement();
platform();

drawSprites();

}
}


function movement(){

  if(keyDown(UP_ARROW) ) {
    player.velocityY = -12;
  }
  
  if(keyDown(RIGHT_ARROW) ) {
    player.x = player.x+12
  }
  
  if(keyDown(LEFT_ARROW) ) {
    player.x = player.x-12
  }
}


function platform(){
  
if(frameCount%160===0){

platformSprite=createSprite(1400,height-200,random(80,120),(random(400,300)))
platformSprite.velocityX=-2
platformSprite.addImage(platformImg)

console.log("ERROR COMING")

platformGroup.add(platformSprite)
}
}