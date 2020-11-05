class Paper {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 4,
            frictionAir: 0.02,
            density: 0.1
        }
        this.r = 50;
        this.body = Bodies.circle(x, y,  this.r-10 , options);
        this.image = loadImage("assets/paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 0, 133);
        noStroke();
        image(this.image, 0, 0, this.r * 2, this.r * 2);
        pop();
    }
}