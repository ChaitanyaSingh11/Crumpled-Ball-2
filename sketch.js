const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bg, paper, ground;

function preload() {
    bg = loadImage("assets/bg.png");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(200, 200);
    ground = new fixed(600, 590, 1200, 20);
    ground.color(0, 255, 0);
    //boundaries
    left = new fixed(0,300,20,600);
    right = new fixed(1200,300,20,600);
    Top =  new fixed(600,0,1200,20);
    bin = new dustbin();
    Engine.run(engine);
}

function draw() {
    Engine.update(engine);
    background(bg);
    paper.display();
    ground.display();
    bin.display();
}

function keyPressed() {
    if (keyCode == DOWN_ARROW) {
        Body.applyForce(paper.body, paper.body.position, {
            x: -25,
            y: -35
        });
    }
    if (keyCode == UP_ARROW) {
        Body.applyForce(paper.body, paper.body.position, {
            x: 25,
            y: -35
        });
    }
}
