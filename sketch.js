
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
  roof1 = new Roof(400, 250, 230, 20);

	ball1 = new Ball(320, 575, 40);
  ball2 = new Ball(360, 575, 40);
  ball3 = new Ball(400, 575, 40);
  ball4 = new Ball(440, 575, 40);
  ball5 = new Ball(480, 575, 40);

  rope1 = new Rope(ball1.body, roof1.body, -80, 0);
  rope2 = new Rope(ball2.body, roof1.body, -40, 0);
  rope3 = new Rope(ball3.body, roof1.body, 0, 0);
  rope4 = new Rope(ball4.body, roof1.body, 40, 0);
  rope5 = new Rope(ball5.body, roof1.body, 80, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
} 

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.appleForce(ball1.body,ball1.body.position, {x:-50, y:-45});}
  }



