class EnemyTank extends Tank {
  constructor(ctx, x, y, src) {
    super(ctx, x, y, src);
    this.action = "ArrowRight";
    this.id = "enemy";
  }

 

  iaFire() {
    this.action = " ";
  }

  randomDirection(number) {
    if (number == 0) {
      this.action = "ArrowUp";
    } else if (number == 1) {
      this.action = "ArrowRight";
    } else if (number == 2) {
      this.action = "ArrowDown";
    } else {
      this.action = "ArrowLeft";
    }
  }

  iaActions() {
    if (
      this.x === 832 - this.width ||
      this.x === 0 ||
      this.y === 0 ||
      this.y === 832 - this.height
    ) {
      this.randomDirection(Math.floor(Math.random() * 4));
      this.iaFire();
    } else if (this.collidesWithABlock) {
      this.collidesWithABlock = false;
      let number = Math.floor(Math.random() * 2);
      if (number == 1) {
        this.randomDirection(Math.floor(Math.random() * 4));
      } else {
        this.iaFire();
      }
    }
  }

  onKeyEvent(action) {
    switch (action) {
      case KEY_UP:
        this.movements.up = true;
        this.movements.right = false;
        this.movements.down = false;
        this.movements.left = false;
      case KEY_RIGHT:
        this.movements.up = false;
        this.movements.right = true;
        this.movements.down = false;
        this.movements.left = false;
        break;
      case KEY_DOWN:
        this.movements.up = false;
        this.movements.right = false;
        this.movements.down = true;
        this.movements.left = false;
        break;
      case KEY_LEFT:
        this.movements.up = false;
        this.movements.right = false;
        this.movements.down = false;
        this.movements.left = true;
        break;
      case KEY_FIRE:
        if (this.bullets.length === 0 && this.canFire) {
          let number = Math.floor(Math.random() * 2);
          if (number == 0) {
            setTimeout(() => {
              this.randomDirection(Math.floor(Math.random() * 4));
            }, 500);
          }
          if (this.direction === "north") {
            this.bullets.push(
              new Bullet(
                this.ctx,
                this.x + this.width / 2 - 6,
                this.y - 16,
                "./assets/img/bullet_north.png",
                this.direction
              )
            );
          } else if (this.direction === "east") {
            this.bullets.push(
              new Bullet(
                this.ctx,
                this.x + this.width,
                this.y + this.height / 2 - 6,
                "./assets/img/bullet_east.png",
                this.direction
              )
            );
          } else if (this.direction === "south") {
            this.bullets.push(
              new Bullet(
                this.ctx,
                this.x + this.width / 2 - 6,
                this.y + this.height,
                "./assets/img/bullet_south.png",
                this.direction
              )
            );
          } else if (this.direction === "west") {
            this.bullets.push(
              new Bullet(
                this.ctx,
                this.x - 16,
                this.y + this.height / 2 - 6,
                "./assets/img/bullet_west.png",
                this.direction
              )
            );
          }
        }
        break;
      default:
        break;
    }
  }
}