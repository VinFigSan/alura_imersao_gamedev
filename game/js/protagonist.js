class Protagonist extends Animate{
    constructor(matriz, sprite, xHtml, widthHtml, heightHtml, widthSprite, heightSprite){
        super(matriz, sprite, xHtml, widthHtml, heightHtml, widthSprite, heightSprite)
        this.yHtml = height - this.heightHtml
        this.floor = this.yHtml
        this.gravity = 4
        this.velocityJump = 0
    }

    jump(){
        this.velocityJump =- 45
    }

    applyGravity(){
        this.yHtml = this.yHtml + this.velocityJump
        this.velocityJump = this.velocityJump + this.gravity
        if(this.yHtml >= this.floor ){
            this.yHtml = this.floor
        }
    }

    colliding(inimigo){
        const precision = .63
        return collideRectRect(this.xHtml, this.yHtml, this.widthHtml * precision, this.heightHtml * precision, 
                        inimigo.xHtml, inimigo.yHtml, inimigo.widthHtml * precision, inimigo.heightHtml * precision)
    }
}