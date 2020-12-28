class Stage {
    constructor(ctx) {        
    this.ctx = ctx
    this.brick = new Brick(this.ctx, 20, 20);
        
    }

    draw() {

        this.brick.draw();

    }

}