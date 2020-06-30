class Foe extends Animate{
    constructor(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite, velocity){
        super(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite, velocity)
        this.yVariation = yVariation
        this.xHtml = width
        this.yHtml = height - this.heightHtml - this.yVariation 
    }

    move(){
        this.xHtml = this.xHtml - this.velocity
    }

    inFrame(){
        this.xHtml = width
    }
}