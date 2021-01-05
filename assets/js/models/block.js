class Block {
  constructor(ctx, x, y,src) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;

    this.sprite = new Image();
    this.sprite.src = src;

    this.sprite.isReady = false;
    this.sprite.horizontalFrames = 1;
    this.sprite.verticalFrames = 1;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.drawCount = 0;

    this.sprite.onload = () => {
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(
        this.sprite.width / this.sprite.horizontalFrames
      );
      this.sprite.frameHeight = Math.floor(
        this.sprite.height / this.sprite.verticalFrames
      );
      this.width = this.sprite.frameWidth;
      this.height = this.sprite.frameHeight;
    };
  }

  isReady() {
    return this.sprite.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.sprite,
        this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
        this.sprite.verticalFrameIndex * this.sprite.frameHeight,
        this.sprite.frameWidth,
        this.sprite.frameHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  } 
}