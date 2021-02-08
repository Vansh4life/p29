const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var box1, box2, box3, box4, box5;
var hexagon, slingshot;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand = new Ground(750,350,400,20);

    //Level 1
    box1 = new Box(640,230,70,70);
    box2 = new Box(710,230,70,70);
    box3 = new Box(780,230,70,70);
    box4 = new Box(850,230,70,70);

    //Level 2
    box5 = new Box(675,160,70,70);
    box6 = new Box(745,160,70,70);
    box7 = new Box(815,160,70,70);

    //Level 3
    box8 = new Box(710,50,70,70);
    box9 = new Box(780,50,70,70);

    //Level 4
    box10 = new Box(745,10,70,70);

    //slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    background("green");
    Engine.update(engine);

    stand.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    //slingshot.display();    
}