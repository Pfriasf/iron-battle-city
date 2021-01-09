class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");

      this.canvas.width = 832;
      this.canvas.height = 832;

      this.fps = 1000 / 60;
      this.drawInterval = undefined;

      this.background = new Background(this.ctx);
      this.players =[]
      this.tank = new Tank(this.ctx, 262, 780, "./assets/img/tank.png");
      this.players.push(this.tank)
      players = this.players
      this.stage = new Stage(this.ctx);
      this.enemiesDrawCount = 0;

      
     
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
        if (enemies.length === 0) {
          console.log("ganaste");
          this.gameOver();
        }
        this.background.draw()
        this.players.forEach(player => player.draw())
        this.stage.draw()
        this.stage.enemies.forEach((enemy) => {
            if(this.enemiesDrawCount <= 5){
               
                enemy.draw();
                
            }
            enemy.iaActions()})        
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move() {
        if (levelBlocks.base[0].sprite.horizontalFrameIndex === 0 && players.length === 1) {
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
        }, 1000)
    }
}