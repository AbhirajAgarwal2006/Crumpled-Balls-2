
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var paperImg, dustbinImg, dusbinSprite;

function preload(){

	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	
	dustbinSprite = createSprite(400, 600, 50, 70);
	dustbinSprite.addImage(dustbinImg);
	
	paper = createSprite(100, 650, 10);
	paper.addImage(paperImg);

	box1 = new Dustbin(400, 690, 80, 10);
	box2 = new Dustbin(355, 655, 10, 80);
	box3 = new Dustbin(440, 655, 10, 80);

	ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );
	World.add(world, ground);
}

function draw() {
  rectMode(CENTER);
  background(1);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  dustbinSprite.display();
  

}

function keyPressed(){
if(keyCode == UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});
}

}