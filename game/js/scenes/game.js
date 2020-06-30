class Gameplay{
    constructor(){
        this.actualIndex = 0
        this.mapFoes = cartridge.mapFoes
    }
    setup(){
        scenario = new Scenario(imgScenario, 6)
        protagonist = new Protagonist(matrizProtagonist, imgProtagonist, 0, 30, 220, 270, 220, 270)
        const slime = new Foe(matrizSlimeFoe, imgSlime, width, 0, 104, 104, 104, 104, 15)
        const troll = new Foe(matrizTrollFoe, imgTroll, width + 700, 0, 400, 370, 400, 370, 19)
        const flyingSlime = new Foe(matrizFlyingSlimeFoe, imgFlyingSlime, width + 500, 270, 200, 150, 200, 150, 24)
        allFoes.push(slime, troll, flyingSlime)
        pontuation = new Points()
        life = new Life(cartridge.conf.lifeMax, cartridge.conf.lifeIni)
        //soundtrack.loop()
    }

    draw(){
        scenario.show()
        scenario.move()
        life.draw()
        pontuation.show()
        pontuation.gainPoints()
        protagonist.show()
        protagonist.applyGravity()
        const actualLine = this.mapFoes[this.actualIndex]
        const foe = allFoes[actualLine.foe]
        const inScreenFoe = foe.xHtml < -foe.widthHtml
        foe.velocity = actualLine.velocity
        foe.show()
        foe.move()
        if (inScreenFoe){
            this.actualIndex++
            foe.inFrame()
          if(this.actualIndex > this.mapFoes.length-1){
            this.actualIndex = 0
          }
        }
        if (protagonist.colliding(foe)){
            life.loseLife()
            protagonist.invencibility()
        }
        if(life.life===-1){
            image(imgGameOver, width/2 - 200, height/3 - 100)
            noLoop()
        }
    }

    keyPressed(key){
        if(key==='ArrowUp'){
            protagonist.jump()
        }
    }
}