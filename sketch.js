var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  wall=createSprite(760, 200, 30, 150);
  car =createSprite(50,200,30,30);
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  car .velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
    }

  drawSprites();
}