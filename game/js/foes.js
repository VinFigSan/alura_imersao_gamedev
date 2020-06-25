class Slime extends Animate{
    constructor(matriz, sprite, xHtml, widthHtml, heightHtml, widthSprite, heightSprite, velocity){
        super(matriz, sprite, xHtml, widthHtml, heightHtml, widthSprite, heightSprite)
        this.yHtml = height - this.heightHtml
        this.velocity = velocity
    }

    move(){
        this.xHtml = this.xHtml - this.velocity
        if(this.xHtml < -this.widthHtml){
            this.xHtml = width
        }
    }
}