class Cannonball{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;

        var ballO = {
            restitution:0.2,
            friction:1,
            density:1,
            isStatic:true
        }

        this.cannonball = Bodies.circle(x, y, r, ballO);
        World.add(world, this.cannonball);

        this.image = loadImage("assets/cannonball.png");

        this.path = [];

    }

    display(){
        push()
        imageMode(CENTER);
        translate(this.cannonball.position.x, this.cannonball.position.y);
        rotate(this.cannonball.angle);
        image(this.image, 0, 0, this.r, this.r);
        pop();
        if(this.cannonball.velocity.x > 0 && this.cannonball.position.x > 300){
            var position = [this.cannonball.position.x, this.cannonball.position.y];
            this.path.push(position);

        }

        for(var i = 0; i< this.path.length; i++){
            image(this.image, this.path[i][0], this.path[i][1],5,5);
        }
    }

    shoot(){
        var velocity =p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.cannonball, false);
        Matter.Body.setVelocity(this.cannonball, {x:velocity.x, y:velocity.y}); 
    }


}