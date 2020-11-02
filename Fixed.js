class fixed {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    color(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.r, this.g, this.b, this.a);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}
