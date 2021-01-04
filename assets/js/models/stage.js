class Stage {
  constructor(ctx) {
    this.ctx = ctx;

    levels.stage_35.forEach((row, rowIndex) => {
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
}