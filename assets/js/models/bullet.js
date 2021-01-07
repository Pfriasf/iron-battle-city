class Bullet extends Block {
  constructor(ctx, x, y, src, direction) {
    super(ctx, x, y, src);
    this.direction = direction;
    this.explosion = new Block(this.ctx, this.x, this.y, "./assets/img/explosion.png")
    this.explosion.drawInterval = undefined
    this.explosion.sprite.horizontalFrames = 2
  }

  move() {
    if (this.direction === "north") {
      this.y -= BULLET_SPEED
    } else if (this.direction === "east") {
      this.x += BULLET_SPEED
    } else if (this.direction === "south") {
      this.y += BULLET_SPEED
    } else if (this.direction === "west") {
      this.x -= BULLET_SPEED
    }
  }

  collidesWith(element) {
    if (this.x < element.x + element.width && this.x + this.width > element.x && this.y < element.y + element.height && this.y + this.height > element.y) {
      return 0
    } else if (this.x >= 832 || this.y >= 832 || this.x <= 0 || this.y <= 0) {
      return 1
    }
  }

  explosionAnimation() {
    console.log("animando")
    this.explosion.sprite.drawCount++;
    if (this.explosion.sprite.horizontalFrameIndex !== 0) {
      this.explosion.sprite.horizontalFrameIndex = 0;
    }
    if (this.explosion.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      if (this.explosion.sprite.horizontalFrameIndex === 0) {
        this.explosion.sprite.horizontalFrameIndex = 1;
      } else {
        this.explosion.sprite.horizontalFrameIndex = 0;
      }
      this.explosion.sprite.drawCount = 0;
    }
  }

  bulletExplosion() {
    if (this.x >= 832) {
      this.explosion.x = 832 - this.explosion.width;
      this.explosion.y = this.y - this.explosion.height / 2 + this.width / 2;
    } else if (this.x <= 0) {
      this.explosion.x = 0;
      this.explosion.y = this.y - this.explosion.height / 2 + this.width / 2;
    } else if (this.y >= 832) {
      this.explosion.x = this.x - this.explosion.width / 2 + this.width / 2;
      this.explosion.y = 832 - this.explosion.height;
    } else if (this.y <= 0) {
      this.explosion.x = this.x - this.explosion.width / 2 + this.width / 2;
      this.explosion.y = 0;
    } else {
      this.explosion.x = this.x - this.explosion.width / 2 + this.width / 2;
      this.explosion.y = this.y - this.explosion.height / 2 + this.width / 2;
    }

    this.explosion.drawInterval = setInterval(() => {
      this.explosionAnimation()
      this.explosion.draw();
    }, 1000 / 60)

    setTimeout(() => {
      clearInterval(this.explosion.drawInterval)
    }, 500)

  }
}