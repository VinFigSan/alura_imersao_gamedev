class BeginAdventure{
    constructor(){
    }

    setup(){
    }

    draw(){
        this._loadBackground()
        this._text()
        this._startGame()
    }

    keyPressed(){
    }

    _loadBackground(){
        image(imgBgStartScreen, 0, 0, width, height)
    }
    _text(){
        textAlign(CENTER)
        textFont(fontStartScreen)
        textSize(50)
        text('As Aventuras de', width/2, height/4)
        textSize(100)
        text('Hipsta', width/2, (height/4)+90)
    }
    _startGame(){
        managerScene.yHtml = height/7*5
        managerScene.draw()
    }
}