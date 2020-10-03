var car,wall;
var speed,weight;
var redCar,greenCar,whiteCar,yellowCar;

function preload() {
redCar=loadImage("red car.png");
greenCar=loadImage("green car.png");
whiteCar=loadImage("white car.png");
yellowCar=loadImage("yellow car.png");
}

function setup() {
speed=random(55,90);
weight=random(400,1500);
car=createSprite(50,200,50,50);
car.shapeColor="white";
car.addImage("whiteCar",whiteCar);
car.scale=0.2;
car.debug=true;
wall=createSprite(1500,200,60,height/2);
wall.debug=true;
car.velocityX=speed;
}

function draw() {
createCanvas(1600,400);
background("black");

//car.collide(wall);

if (wall.x-car.x < (car.width + wall.width)/2){
  car.velocityX=0;
  var deformation=0.5* weight* speed* speed/22509;
  if (deformation>180){
    car.changeImage("redCar",redCar);
  }
  if (deformation<180 && deformation>100){
    car.changeImage("yellowCar",yellowCar);
  }
  if (deformation<100){
    car.changeImage("greenCar",greenCar);
  }
}
drawSprites();
}