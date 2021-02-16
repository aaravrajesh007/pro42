const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,man,t1,t2,t3,t4;
var drops=[];

function preload(){
    /*
    man=loadAnimation("images/WM/walking_1.png","images/WM/walking_2.png","images/WM/walking_3.png","images/WM/walking_4.png","images/WM/walking_5.png","images/WM/walking_6.png","images/WM/walking_7.png","images/WM/walking_8.png")
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
*/
}

function setup(){
   createCanvas(600,800)
    engine=Engine.create();
    world=engine.world;
    /*
    man = createSprite(100,750);
    man.addAnimation("walk",man);
    */
   umbrella = new Umbrella(200,200);
}

function draw(){
    background(255);
    Engine.update(engine);

    var maxDrops=100;
    for(var i; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

    umbrella.display();
    drops.display();
}   

