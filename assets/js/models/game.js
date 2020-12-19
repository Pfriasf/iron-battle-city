class Game {
    constructor (canvasId){
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width = 832
        this.canvas.height = 832

        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx)

        this.tank = new Tank(this.ctx,100,100)
    }

    start() {
        this.draw()
    }

    draw () {
        this.background.draw()
        this.tank.draw()
    }



}