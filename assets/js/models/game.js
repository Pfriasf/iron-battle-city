class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width = 832
        this.canvas.height = 832


        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx)

        this.tank = new Tank(this.ctx, 262, 780)       
        this.stage = new Stage(this.ctx)
        this.base = new Block(this.ctx, this.canvas.width / 2 - 32, this.canvas.height - 44, "./assets/img/base.png")
        this.base.sprite.horizontalFrames = 2;
    }

    start() {
        if (!this.drawInterval) {
            this.drawInterval = setInterval(() => {
                this.clear()
                this.move()
                this.draw()
            }, this.fps)
        }
    }


    draw() {
        this.background.draw()
        this.tank.draw()
        this.stage.draw()
        this.base.draw()
       
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move() {
        this.tank.move();
    }

    onKeyEvent(event) {
        this.tank.onKeyEvent(event)
    }
}