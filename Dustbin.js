class dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true
        };
        this.image1 = loadImage("assets/bluebin.png");
        this.image2 = loadImage("assets/greenbin.png");
        this.l1 = Bodies.rectangle(680,500,20,100,{isStatic:true});
        this.l2 = Bodies.rectangle(680+150,500,20,100,{isStatic:true});
        this.l3 = Bodies.rectangle(680+300,500,20,100,{isStatic:true});
        World.add(world,[this.l1,this.l2,this.l3]);
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image2,900, 470,225,225);
        image(this.image1,755, 470,225,225);
        rectMode(CENTER);
        noStroke()
        fill(0,0);
        rect(this.l1.position.x,this.l1.position.y,20,160);
        rect(this.l2.position.x,this.l2.position.y,20,160);
        rect(this.l3.position.x,this.l3.position.y,20,160);
        pop();
    }
}