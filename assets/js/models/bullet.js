class Bullet extends Block {
  constructor(ctx, x, y, src, direction) {
    super(ctx, x, y, src);
    this.direction = direction;
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
    if(this.x < element.x + element.width && this.x + this.width > element.x && this.y < element.y + element.height && this.y + this.height > element.y){
      return 0
    } else if (this.x >= 832 || this.y >= 832 || this.x <= 0 || this.y <= 0) {
      return 1
    }
  }
  }