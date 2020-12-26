class Tank {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;
    
    this.sprite = new Image();
    this.sprite.src = "./assets/img/tank.png";
    
    this.sprite.isReady = false;
    this.sprite.horizontalFrames = 4;
    this.sprite.verticalFrames = 2;
    this.sprite.horizontalFrameIndex = 2;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.drawCount = 0
    
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
        
        this.minX = 0;
        this.maxX = this.ctx.canvas.width - this.sprite.width / 4;
        this.minY = 0;
        this.maxY = this.ctx.canvas.height - this.sprite.height / 2;
        
console.log(this.maxX);


    this.movements = {
      up: false,
      right: false,
      down: false,
      left: false,
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

  onKeyEvent(event) {
    const status = event.type === "keydown";
    switch (event.key) {
      case KEY_UP:
        this.movements.up = status;
        break;
      case KEY_RIGHT:
        this.movements.right = status;
        break;
      case KEY_DOWN:
        this.movements.down = status;
        break;
      case KEY_LEFT:
        this.movements.left = status;
        break;
      default:
        break;
    }
  }

  move() {
    if (this.movements.up) {
      this.y -= SPEED;
      this.animateUp()
    } else if (this.movements.down) {
      this.y += SPEED;
      this.animateDown()
    } else if (this.movements.right) {
      this.x += SPEED;
      this.animateRight()
    } else if (this.movements.left) {
      this.x -= SPEED;
      this.animateLeft()
    }

    if(this.x >= this.maxX){
      this.x = this.maxX
    } else if ( this.x <= this.minX){
      this.x = this.minX
    }

    if (this.y >= this.maxY) {
      this.y = this.maxY;
    } else if (this.y <= this.minY) {
      this.y = this.minY;
    }
    

  }

  animateUp() {
    this.sprite.drawCount++;
    if (this.sprite.horizontalFrameIndex !== 2) {
      this.sprite.horizontalFrameIndex = 2;
    }
    if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      if (this.sprite.verticalFrameIndex === 0) {
        this.sprite.verticalFrameIndex = 1;
      } else {
        this.sprite.verticalFrameIndex = 0;
      }
      this.sprite.drawCount = 0;
    }
  }

  animateDown() {
    this.sprite.drawCount++;
    if (this.sprite.horizontalFrameIndex !== 1) {
      this.sprite.horizontalFrameIndex = 1;
    }
    if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      if (this.sprite.verticalFrameIndex === 0) {
        this.sprite.verticalFrameIndex = 1;
      } else {
        this.sprite.verticalFrameIndex = 0;
      }
      this.sprite.drawCount = 0;
    }
  }

  animateRight() {
    this.sprite.drawCount++;
    if (this.sprite.horizontalFrameIndex !== 0) {
      this.sprite.horizontalFrameIndex = 0;
    }
    if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      if (this.sprite.verticalFrameIndex === 0) {
        this.sprite.verticalFrameIndex = 1;
      } else {
        this.sprite.verticalFrameIndex = 0;
      }
      this.sprite.drawCount = 0;
    }
  }

  animateLeft() {
    this.sprite.drawCount++;
    if (this.sprite.horizontalFrameIndex !== 3) {
      this.sprite.horizontalFrameIndex = 3;
    }
    if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      if (this.sprite.verticalFrameIndex === 0) {
        this.sprite.verticalFrameIndex = 1;
      } else {
        this.sprite.verticalFrameIndex = 0;
      }
      this.sprite.drawCount = 0;
    }
  }
}