var fairy, fairyImage;
var star, starImage, starBody;
var bg, bgImage;

var engine, world; 

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Bod= Matter.Body; 

function preload(){
   starImage = loadImage("images/star.png"); 
   fairyImage = loadAnimation("images/fairy1.png", "images/fairy2.png")
   bgImage = loadImage("images/starnight.png")
}

function setup() {
  createCanvas(800, 750);

  bg = createSprite(400, 375);
  bg.addImage("bg", bgImage);
  
  fairy = createSprite(150, 500);
  fairy.addAnimation("fairy", fairyImage);
  fairy.scale = 0.3;

  star = createSprite(750, 75);
  star.addImage("star", starImage);
  star.scale = 0.3;
  
  engine = Engine.create();
  world = engine.world;
  
 
  starBody = Bodies.circle(750, 75, 5, {restitution:0.5, isStatic:true});
  World.add(world,starBody)
}


function draw() {
  background("black");


  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  Engine.update(engine);

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}

