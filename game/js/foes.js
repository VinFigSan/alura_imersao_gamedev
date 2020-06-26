class Foe extends Animate{
    constructor(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite, velocity, delay){
        super(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite, velocity, delay)
        this.yVariation = yVariation
        this.xHtml = width + this.delay
        this.yHtml = height - this.heightHtml - this.yVariation 
    }

    move(){
        this.xHtml = this.xHtml - this.velocity
        if(this.xHtml < -this.widthHtml - this.delay){
            this.xHtml = width
        }
    }
}