const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, cb, boat;
var balls = [];
var boats = [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  //cb = new Cannonball(cannon.x, cannon.y, 25);


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);



  Engine.update(engine);
  ground.display();


  cannon.display();
  tower.display();

  showBoats();

  for (var i = 0; i < balls.length; i++) {
    showCannonball(balls[i], i);
  }



}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    console.log(balls);
    balls[balls.length - 1].shoot();
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonball;
    cannonball = new Cannonball(cannon.x, cannon.y, 25);
    balls.push(cannonball);
  }
}

function showCannonball(ball, i) {
  ball.display();
  if (ball.cannonball.position.x >= width || ball.cannonball.position.y >= height) {
    World.remove(world, ball.cannonball);
    balls.splice(i, 1);

  }




}

function showBoats() {
  if (boats.length > 0) {
    // console.log("if condition");

    // if (boats[boats.length - 1].boat.position.x < 1000 || boats[boats.length - 1] == undefined) {
    //   var position = [-20, -40, -60, -80];
    //   var pos = random(position);
    //   boat = new Boat(width - 100, height - 60, 200, 200, pos);
    //   boats.push(boat);


    //   for (var i = 0; i < boats.length; i++) {

    //     if (boats[i]) {
    //       Matter.Body.setVelocity(boats[i].boat, { x: -1, y: 0 });
    //       boats[i].display();

    //     }
    //   }
    // }


  }
  else {
    boat = new Boat(width - 100, height - 60, 200, 200, -60);
    boats.push(boat);
    console.log(boats);
    Matter.Body.setVelocity(boats[0].boat, { x: -5, y: 0 });
    console.log("r");
    boats[0].display();

  }

}

