class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");

      this.canvas.width = 832;
      this.canvas.height = 832;

      this.fps = 1000 / 60;
      this.drawInterval = undefined;

      this.background = new Background(this.ctx);

      this.tank = new Tank(this.ctx, 262, 780, "./assets/img/tank.png");
      this.stage = new Stage(this.ctx);
     
    }

    start() {
        if (!this.drawInterval) {
            this.drawInterval = setInterval(() => {
                this.clear();
                this.move();
                this.draw();
            }, this.fps);
                  
    }
        
    }
    
    draw() {
        this.background.draw()
        this.tank.draw()
        this.stage.draw()
        this.stage.enemies.forEach((enemy) => {
            enemy.draw()
            enemy.iaActions()})        
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move() {
        if (levelBlocks.base[0].sprite.horizontalFrameIndex === 0) {
            this.tank.move();
            this.stage.enemies.forEach((enemy) => {
                enemy.move()
                enemy.onKeyEvent(enemy.action)
            });

        } else {
            this.gameOver()
        }
    }

    onKeyEvent(event) {
        this.tank.onKeyEvent(event)               
    }

    gameOver() {
        this.tank.canFire = false
        setTimeout(() => {
            clearInterval(this.drawInterval)
        }, 5000)
    }
}