class Gameplay{
    constructor(){
        this.actualFoe = 0
    }
    setup(){
        scenario = new Scenario(imgScenario, 6)
        protagonist = new Protagonist(matrizProtagonist, imgProtagonist, 0, 30, 220, 270, 220, 270)
        const slime = new Foe(matrizSlimeFoe, imgSlime, width, 0, 104, 104, 104, 104, 15, 20)
        const troll = new Foe(matrizTrollFoe, imgTroll, width + 700, 0, 400, 370, 400, 370, 19, 100)
        const flyingSlime = new Foe(matrizFlyingSlimeFoe, imgFlyingSlime, width + 500, 270, 200, 150, 200, 150, 24, 200)
        allFoes.push(slime, troll, flyingSlime)
        pontuation = new Points()
        //soundtrack.loop()
    }

    draw(){
        scenario.show()
        scenario.move()
        pontuation.show()
        pontuation.gainPoints()
        protagonist.show()
        protagonist.applyGravity()
        const foe = allFoes[this.actualFoe]
        const inScreenFoe = foe.xHtml <- foe.widthHtml
        foe.show()
        foe.move()
        if (inScreenFoe){
            this.actualFoe++
          if(this.actualFoe > allFoes.length-1){
            this.actualFoe = 0
          }
          foe.velocity = parseInt(random(15,30))
        }
        if (protagonist.colliding(foe)){
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