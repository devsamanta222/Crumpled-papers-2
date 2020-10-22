
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(50,600)
	ground1=new Ground(400,620,800,12)
	box1=new Box(650,600,200,20)
	box2=new Box(550,560,20,100)
	box3=new Box(750,560,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display()
  ground1.display()
 box1.display()
 box2.display()
 box3.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-120})
	}
}

