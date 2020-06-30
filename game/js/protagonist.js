class Protagonist extends Animate{
    constructor(matriz, sprite, xHtml, yVariation ,widthHtml, heightHtml, widthSprite, heightSprite){
        super(matriz, sprite, xHtml, yVariation, widthHtml, heightHtml, widthSprite, heightSprite)
        this.yVariation = yVariation
        this.yHtml = height - this.heightHtml - this.yVariation
        this.floor = this.yHtml
        this.gravity = 4
        this.velocityJump = 0
        this.jumpHeight = -45
        this.jumps = 0
    }

    jump(){
        if(this.jumps < 2){
            this.velocityJump = this.jumpHeight
            this.jumps++
            jumpSound.play()
        }
    }

    applyGravity(){
        this.yHtml = this.yHtml + this.velocityJump
        this.velocityJump = this.velocityJump + this.gravity
        if(this.yHtml >= this.floor ){
            this.yHtml = this.floor
            this.jumps = 0
        }
    }

    colliding(inimigo){
        const precision = .63
        //rect(this.xHtml, this.yHtml, this.widthHtml * precision, this.heightHtml * precision)
        //rect(inimigo.xHtml, inimigo.yHtml, inimigo.widthHtml * precision, inimigo.heightHtml * precision)
        return collideRectRect(this.xHtml, this.yHtml, this.widthHtml * precision, this.heightHtml * precision, 
                        inimigo.xHtml, inimigo.yHtml, inimigo.widthHtml * precision, inimigo.heightHtml * precision)
    }
}