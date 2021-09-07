class Boat{
    constructor(x, y, w, h, position){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.position = position;
        
        var options = {
            restitution:1, 
            friction:0, 
            density: 1
            
        }  

        this.boat = Bodies.rectangle(this.x, this.y, this.w, this.h, options);

        this.image = loadImage("./assets/boat.png");
        
        World.add(world, this.boat);

    }

    display(){
        push()
        imageMode(CENTER);
        translate(this.boat.position.x, this.boat.position.y);
        image(this.image, 0,this.position, this.w, this.h);
        pop();
    }

    

}