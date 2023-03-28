var player,playerAnimation,playerAvatar

function preload(){
  playerAnimation=loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png","assets/6.png","assets/7.png")
  playerAvatar=loadAnimation("assets/n0.png","assets/n2.png","assets/n3.png","assets/n4.png","assets/n5.png","assets/n6.png","assets/n7.png","assets/n8.png","assets/n9.png","assets/n10.png","assets/n11.png","assets/n12.png","assets/n13.png","assets/n14.png","assets/n15.png","assets/n16.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
playerAnimation.frameDelay=5;
playerAvatar.frameDelay=2;
player=createSprite(100,height-150);
player.addAnimation("running",playerAvatar);
player.scale=1
}
function draw(){
  background(0);
  drawSprites();

}