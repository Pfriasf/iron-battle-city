class Tank {
    constructor(ctx,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y

        this.width = 0
        this.height = 0

        this.sprite = new Image()
        this.sprite.src = "./assets/img/tank.png"

         this.sprite.isReady = false;
         this.sprite.horizontalFrames = 4;
         this.sprite.verticalFrames = 2;
         this.sprite.horizontalFrameIndex = 2;
         this.sprite.verticalFrameIndex = 0;

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
    return this.sprite.isReady
    }

    draw(){
        if(this.isReady()){
            console.log(this.sprite.verticalFrameIndex);
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
           )
       }

    }




}