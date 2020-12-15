const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage;

var bike;
var ground1, ground2, ground3, ground4;

var ball1, ball2, ball3, ball4;
var rope1, rope2, rope3, rope4;

function preload(){
    backgroundImage = loadImage("images/bachground/Desert.jpg");
}
function setup(){
    createCanvas(1600,800);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,500,800,10,0);

    ground2 = new Ground(1490,210,1500,10,75);

    ground3 = new Ground(3000,120,800,10,0);

    ground4 = new Ground(6000,240,5000,10,0);

    bike = new Bike(200,498); 
 
    ball1=new BallPen(5500,140);
    rope1 = new Pendulum(ball1.body,{x:5500, y:-40});

    ball2 =new BallPen(6000,140);
    rope2 = new Pendulum(ball2.body,{x:6050, y:-40});
    
    ball3=new BallPen(6500,140);
    rope3 = new Pendulum(ball3.body,{x:7500, y:-40});
    
    ball4=new BallPen(7000,140);
    rope4 = new Pendulum(ball4.body,{x:8500, y:-40});

}
function draw(){ 
    background(backgroundImage);
    Engine.update(engine);

    
    camera.position.x =bike.body.position.x;
    camera.position.y =bike.body.position.y;

    

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    bike.display();

    ball1.display();
    rope1.display();
    ball2.display();
    rope2.display();
    ball3.display();
    rope3.display();
    ball4.display();
    rope4.display();

}

function keyPressed(){
    if (keyCode === 39){
        Body.setVelocity(bike.body, {x:20,y:0});
    }
}