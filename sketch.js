var car,car2,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400); 
  car=createSprite(50, 150,50,50);
  car.velocityX = random(55,90);
  car.shapeColor = "pink";

  car2=createSprite(50,350,50,50);
  car2.velocityX = random(55,90);
  car2.shapeColor = "green";

  wall=createSprite(1200,200,60,height)
  wall.shapeColor=(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background("black");  
  
  if (wall.x-car.x < (car.width+wall.widht)/2){
    car.velocityX=0; car2.velocityX=0;
    var deformation=0.5 * weight *speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
}
  drawSprites();
}