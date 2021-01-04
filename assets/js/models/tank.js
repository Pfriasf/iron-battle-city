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

    this.minX = 0;
    this.maxX = this.ctx.canvas.width - 52;
    this.minY = 0;
    this.maxY = this.ctx.canvas.height - 52;

    this.movements = {
      up: false,
      right: false,
      down: false,
      left: false,
    };

     this.faceTo = {
       north: true,
       east: false,
       south: false,
       west: false,
     };
    
    this.canFire = true;
    this.bullets = [];
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

      this.bullets.forEach((bullet) => bullet.draw());
    }
    console.log(this.bullets)
  }

  onKeyEvent(event) {
    const status = event.type === "keydown";
    console.log(event.key)
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
      case KEY_FIRE:
           
        if (this.canFire) {
          console.log("pum")
          if(this.faceTo.north){
            this.bullets.push(new Block(this.ctx, this.x + this.width / 2 - 6, this.y - 16, "./assets/img/bullet_north.png"));
          } else if(this.faceTo.east === true){
            this.bullets.push(new Block(this.ctx, this.x + this.width, this.y + this.height / 2 - 6, "./assets/img/bullet_east.png"));
          } else if(this.faceTo.south === true){
            this.bullets.push(new Block(this.ctx, this.x + this.width / 2 - 6, this.y + this.height, "./assets/img/bullet_south.png"));
          } else if(this.faceTo.west === true){
            this.bullets.push(new Block(this.ctx, this.x - 16, this.y + this.height / 2 - 6, "./assets/img/bullet_west.png"));
          }   
          this.canFire = false
          setTimeout(() => {
            this.canFire = true
          }, 500);
        }
        break;
      default:
        break;
    }
  }

  move() {
    if (this.movements.up) {
      this.checkCollisions()
      this.y -= SPEED;
      this.animateUp();
    } else if (this.movements.down) {
      this.checkCollisions();
      this.y += SPEED;
      this.animateDown();
    } else if (this.movements.right) {
      this.checkCollisions();
      this.x += SPEED;
      this.animateRight();
    } else if (this.movements.left) {
      this.checkCollisions();
      this.x -= SPEED;
      this.animateLeft();
    }

    if (this.x >= this.maxX) {
      this.x = this.maxX;
    } else if (this.x <= this.minX) {
      this.x = this.minX;
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
    this.faceTo.north = true;
    this.faceTo.east = false;
    this.faceTo.south = false;
    this.faceTo.west = false;
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

     this.faceTo.north = false;
     this.faceTo.east = false;
     this.faceTo.south =true;
     this.faceTo.west = false;
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

    this.faceTo.north = false;
    this.faceTo.east = true;
    this.faceTo.south = false;
    this.faceTo.west = false;
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

    this.faceTo.north = false;
    this.faceTo.east = false;
    this.faceTo.south = false;
    this.faceTo.west = true;
  }

  collidesWith(element) {
    if (this.x < element.x + element.width && this.x + this.width > element.x && this.y < element.y + element.height && this.y + this.height > element.y) {

      const top_diff = element.y + element.height - this.y;
      const bottom_diff = this.y + this.height - element.y;
      const left_diff = element.x + element.width - this.x;
      const right_diff = this.x + this.width - element.x;

      const min = Math.min(bottom_diff, top_diff, left_diff, right_diff);

      const collidesOn = {
        bottom: bottom_diff == min,
        right: right_diff == min,
        left: left_diff == min,
        top: top_diff == min,
      }

      if (collidesOn.top === true) {
        this.y = element.y + element.height
      } else if (collidesOn.right === true) {
        this.x = element.x - this.width;
      } else if (collidesOn.bottom === true) {
        this.y = element.y - this.height
      } else if (collidesOn.left === true) {
        this.x = element.x + element.width;
      }
    }
  }

  checkCollisions() {
    for (const element in levelBlocks) {
      levelBlocks[element].forEach((block) => {
        this.collidesWith(block);
      });
    }
  }
}