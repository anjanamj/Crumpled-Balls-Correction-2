//**** All are constants and each line should end with ';' */
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper, paperImg;
var dustbinImg;
var engine, world;

function setup() {

  var canvas = createCanvas(1600, 400);

  engine = Engine.create();
  world = engine.world;

//For the ground 

  groundSprite=new Ground(width/2, height-35, width,10);
  //**** shapecolor won't work since ground is not a sprite */
  //groundSprite.shapeColor=color(255)

//for the circle paper

//*** pass radius 70 as argument since paper object is a circle */
  Paper = new paper(200, 10, 50);

  //For the dustbin
  
  //trash1 = createSprite(860, 350, 200, 20);
  //trash2 = createSprite(780, 240, 20, 200);
  //trash3 = createSprite(940, 240, 20, 200);

   trashObj = new dustbin(780, height-40, 100, 20);

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(255);
 // fill(255);
  groundSprite.display(); 
  Paper.display();

  
  trashObj.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    //****adjuct the values for correct force */
   Matter.Body.applyForce(Paper.body, Paper.body.position, {x:25, y:-50});
   
   }
 }