const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
   
 var ball

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


   
  ball=new Ball(200,200,80,80) 
  rope=new Rope(ball.body,{x:500,y:50})
  ball2=new Ball(570,250,80,80) 
  rope2=new Rope(ball2.body,{x:570,y:50})
  ball3=new Ball(640,300,80,80) 
  rope3=new Rope(ball3.body,{x:640,y:50})
  ball4=new Ball(710,350,80,80) 
  rope4=new Rope(ball4.body,{x:710,y:50})
 
 
   
}

function draw(){
    
    background("orange")

    Engine.update(engine);
  

  
    ball.display();
    ball2.display()
    ball3.display();
    ball4.display()
    
    rope.display();
    rope2.display()
    rope3.display();
    rope4.display()
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


