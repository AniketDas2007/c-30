class Box {
    constructor(x, y, width, height) {
        // creating options for the box
        var options = {
            isStatic: false,
            density: 0.001,
            friction: 1
        }

        // for tint
        this.visibility = 255;

        // creating body
        this.body = Bodies.rectangle(x, y, width, height, options);

        // to get width & height in any function
        this.width = width;
        this.height = height;

        // adding the body to world
        World.add(world, this.body);
    }

    // to display the box
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(color);
            stroke(border);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 1;
            tint(255, this.visibility);
            pop();
        }
    }
}