class Background {
    constructor(ctx){
        this.ctx = ctx

        this.x = 0
        this.y = 0
        this.h = this.ctx.canvas.height
        this.w = this.ctx.canvas.width

    }
    
        draw() {
            this.ctx.fillRect(
                this.x,
                this.y,
                this.h,
                this.w
            )
        }


}