var fixedSprite;
var MovingSprite;
var sprite3;
var sprite4;

function setup() {
  createCanvas(1000,1000);
  fixedSprite = createSprite(100,200,70,40);
  MovingSprite = createSprite(150,150,40,40);
  sprite3 = createSprite(400,100,50,50);
  sprite4 = createSprite(400,800,80,80);
  fixedSprite.shapeColor="green";
  MovingSprite.shapeColor="green";
  sprite3.shapeColor="blue";
  sprite4.shapeColor="blue";
  sprite3.velocityY = 5;
  sprite4.velocityY = -5;
}

function draw() {
  background(0,0,0); 
 // MovingSprite.x = World.mouseX;
 // MovingSprite.y = World.mouseY;
  

  bounceOff(sprite3,sprite4);
  
  drawSprites();
  }
  
  