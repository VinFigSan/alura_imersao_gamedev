class Animate{
    constructor(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite, velocity, delay){
        this.matriz = matriz
        this.sprite = sprite
        this.xHtml = xHtml
        this.yVariation = yVariation
        this.yHtml = height - this.heightHtml - this.yVariation
        this.widthHtml = widthHtml
        this.heightHtml = heightHtml
        this.widthSprite = widthSprite
        this.heightSprite = heightSprite
        this.velocity = velocity
        this.delay = delay
        this.frameNow = 0
    }

    show(){
        image(this.sprite, this.xHtml, this.yHtml, this.widthHtml, this.heightHtml, 
              this.matriz[this.frameNow][0], this.matriz[this.frameNow][1], this.widthSprite, 
              this.heightSprite)
        this.animate()
    }

    animate(){
        this.frameNow++
        if (this.frameNow === this.matriz.length-1){
            this.frameNow = 0
        }
    }
}