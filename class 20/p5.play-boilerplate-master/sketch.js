var fixedRect,movingRect;
var game1,game2;


function setup() {
  createCanvas(900,700);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor= "yellow";
  fixedRect.debug="true";
  movingRect=createSprite(500, 150, 50, 50);
  movingRect.shapeColor= "yellow";
  movingRect.debug="true";

  game1=createSprite(300,500,60,60);
  game1.shapeColor="blue";
  game1.debug="true";
  game2=createSprite(360,600,40,60);
  game2.shapeColor="blue";
  game2.debug="true";

}

function draw() {
  background("black");  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
 /* if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    fixedRect.shapeColor= "blue";
    movingsRect.shapeColor="blue";
  }
  else {
    fixedRect.shapeColor= "yellow";
    movingRect.shapeColor="yellow";
  }*/
  if (IsTouching(movingRect,game2)){
    movingRect.shapeColor= "red";
    game2.shapeColor= "red";
  }
  else{
    movingRect.shapeColor= "yellow";
    game2.shapeColor= "yellow";
  }
  drawSprites();
  
}
function IsTouching(object1,object2){
if (object1.x-object2.x<object2.width/2+object1.width/2 && 
  object2.x-object1.x<object2.width/2+object1.width/2
  && object1.y-object2.y<object2.height/2+object1.height/2
  && object2.y-object1.y<object2.height/2+object1.height/2)
{
return true;
}
else{
 return false; 
}
}

