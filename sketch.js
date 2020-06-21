var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  deformation=(0.5*weight*speed*speed)/22500
}
function draw() {
  background(0,0,0);  
  wall.shapeColor=(80,80,80);
  car.shapeColor=(255,255,255);
  car.velocityX=speed;
  if(car.x-wall.x>=wall.x-car.x)
  {
    car.velocityX=0;
    if(deformation<=100)
{
  car.shapeColor="green";
}
if(deformation<180)
{
  car.shapeColor="yellow";
}
if(deformation>180)
{
  car.shapeColor="red";
}
  }
  drawSprites();
}