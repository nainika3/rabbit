var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  
 createApples()
 createLeaves()

  drawSprites();
}

function createApples(){
  if(frameCount %  80===0){
  apple=createSprite(120,20,40,10);
apple.velocityY=4;
apple.addImage("apple falling",appleImg);
apple.scale=0.06;
apple.x= Math.round(random(10,60))
apple.depth=rabbit.depth;
apple.depth=rabbit.depth+1;  
}
  
}

function createLeaves(){
  if(frameCount %  80===0){
leaves=createSprite(270,20,40,10);
leaves.velocityY=2;
leaves.addImage("leaf falling",leavesImg);
leaves.scale=0.06;
leaves.x= Math.round(random(10,500))
leaves.depth=rabbit.depth;
leaves.depth=rabbit.depth+1;
}
 
}
