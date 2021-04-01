const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundImg;
var maxSnows = 50;
var snows = [];

function preload(){
   backgroundImg = loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < maxSnows; i++){
      snows.push(new Snow(random(0,790),random(0,200), 15, 400));
  }

}

function draw() {
  background(backgroundImg);

  for(var i = 0; i < maxSnows; i++){
    snows[i].display();
}


}