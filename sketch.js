const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.Body;

var drops; // create array for drops
var Bruce;
var thunderBolt,boltIMG;
var engine,world;

function preload(){

  // load all the thunder images
    
}

function setup(){
  createCanvas(800,750);
  engine=Engine.create(engine);
  world=engine.world; 

  Bruce=new bruce_wayne(200,200,5,5);

  
  /* if(frameCount % 150 = 0){
  use for loop as given in intructions
  }*/


  Engine.run(engine);
    
}

function draw(){
   background(40,40,40);
   
   Engine.update(engine);
   /*
   use switch statment to display various thunders*/

   Bruce.display();

   drawSprites();
}   

