const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var backgroundImage;

var bike;
var ground1, ground2, ground3, ground4, ground5, ground6;

var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7, rope8;

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

    ground4 = new Ground(6500,300,5000,10,0);

    ground5 = new Ground(10050,100,2000,10,75);

    ground6 = new Ground(11230,-290,500,10,0);

    bike = new Bike(200,498); 
    
 
    ball1=new BallPen(5000,140);
    rope1 = new Pendulum(ball1.body,{x:5500, y:-25});

    ball2 =new BallPen(5300,140);
    rope2 = new Pendulum(ball2.body,{x:5800, y:-25});
    
    ball3=new BallPen(5800,140);
    rope3 = new Pendulum(ball3.body,{x:6300, y:-25});
    
    ball4=new BallPen(6200,140);
    rope4 = new Pendulum(ball4.body,{x:6700, y:-25});

    ball5=new BallPen(6500,140);
    rope5 = new Pendulum(ball5.body,{x:7000, y:-25});

    ball6 =new BallPen(6800,140);
    rope6 = new Pendulum(ball6.body,{x:7300, y:-25});
    
    ball7=new BallPen(7200,140);
    rope7 = new Pendulum(ball7.body,{x:7700, y:-25});
    
    ball8=new BallPen(7500,140);
    rope8 = new Pendulum(ball8.body,{x:7800, y:-25});

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 800,
          wireframes: false
        }
      });
        
        Engine.run(engine);
}
function draw(){ 
    background(backgroundImage);
   
    camera.position.x =bike.body.position.x;
    camera.position.y =bike.body.position.y;

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();

    bike.display();

    ball1.display();
    rope1.display();
    ball2.display();
    rope2.display();
    ball3.display();
    rope3.display();
    ball4.display();
    rope4.display();
    ball5.display();
    rope5.display();
    ball6.display();
    rope6.display();
    ball7.display();
    rope7.display();
    ball8.display();
    rope8.display();



}

function keyPressed(){
    if (keyCode === 39){
        Body.setVelocity(bike.body, {x:20,y:0});
    }
    if (keyCode === 37){
        Body.setVelocity(bike.body, {x:-15,y:0});
    }
}




