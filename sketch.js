const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var bob1; 
 var ground1;
var shot;
var ground2; 
var ground3;
var ground4;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  bob1 = new BobClass(200,250,50,50,90);
ground1 = new Ground(600,500,1200,50);
ground2 = new Ground(200,350,150,20);
ground3 = new Ground(700,200,250,25);
ground4 = new Ground(700,400,250,25);

block1 = new Grounda(700,150,25,40);
block2 = new Grounda(740,150,25,40);
block3 = new Grounda(780,150,25,40);
block4 = new Grounda(660,150,25,40);
block5 = new Grounda(620,150,25,40);

block6 = new Grounda(700,110,25,40);
block7 = new Grounda(740,110,25,40);
block8 = new Grounda(660,110,25,40);

block9 = new Grounda(720,70,30,40);
block10 = new Grounda(680,70,30,40);

block11 = new Grounda(700,30,30,40);

block21 = new Grounda(700,350,25,40);
block22 = new Grounda(740,350,25,40);
block23 = new Grounda(780,350,25,40);
block24 = new Grounda(660,350,25,40);
block25 = new Grounda(620,350,25,40);

block26 = new Grounda(700,310,25,40);
block27 = new Grounda(740,310,25,40);
block28 = new Grounda(660,310,25,40);

block29 = new Grounda(720,270,30,40);
block210 = new Grounda(680,270,30,40);

block211 = new Grounda(700,230,30,40);

shot = new Slingshota(bob1.body,{x:200,y:250})
}

function draw() {
  Engine.update(engine);
  background(255);  
  bob1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  block1.display();
  block3.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block210.display();
  block211.display();

  
  shot.display();
  
}
function mouseDragged()
{
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    shot.fly();
}