class Game {
    constructor (canvasId){
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width = 800
        this.canvas.height = 800

        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx)
    }

    start() {
        this.draw()
    }

    draw () {
        this.background.draw()
    }



}