class Stage {
  constructor(ctx) {
    this.ctx = ctx;
    
    this.enemies = [];
    enemies = this.enemies;
    this.enemiesCount = 0;
    if(this.enemiesCount < 20){
        this.createEnemies()
        this.enemiesCount++
    }
    
    this.base = new Block(this.ctx, 832 / 2 - 32, 832 - 44, "./assets/img/base.png")
    this.base.sprite.horizontalFrames = 2;
    levelBlocks.base.push(this.base)
    
    levels.stage_14.forEach((row, rowIndex) => {
      row.forEach((element, elementIndex) => {
        switch (element) {
          case 0:
            levelBlocks.brickBlocks.push(
              new Block(
                this.ctx,
                elementIndex * 32,
                rowIndex * 32,
                "./assets/img/brick.png"
              )
            );
            break;
          case 1:
            levelBlocks.steelBlocks.push(
              new Block(
                this.ctx,
                elementIndex * 32,
                rowIndex * 32,
                "./assets/img/steel.png"
              )
            );
            break;
          case 2:
            levelBlocks.waterBlocks.push(
              new Block(
                this.ctx,
                elementIndex * 32,
                rowIndex * 32,
                "./assets/img/water.png"
              )
            );
            break;
          case 3:
            levelBlocks.treeBlocks.push(
              new Block(
                this.ctx,
                elementIndex * 32,
                rowIndex * 32,
                "./assets/img/tree.png"
              )
            );
            break;
          case 4:
            levelBlocks.iceBlocks.push(
              new Block(
                this.ctx,
                elementIndex * 32,
                rowIndex * 32,
                "./assets/img/ice.png"
              )
            );
            break;
          case 5:
            break;
          default:
        }
      });
    });

  
    

  }

  draw() {
    
    for (const element in levelBlocks) {
      levelBlocks[element].forEach((block) => {
        block.draw();
      });
    }
  }

  createEnemies(){    
    this.enemies.push(new EnemyTank(this.ctx, 10, 10, "./assets/img/tank.png"));
  }

}