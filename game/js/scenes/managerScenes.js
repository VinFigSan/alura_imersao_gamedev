class Manager{
    constructor(text, xHtml, yHtml){
        this.text = text
        this.xHtml = xHtml
        this.yHtml = yHtml
        this.changeButton = createButton(this.text)
        this.changeButton.mousePressed(()=>
            this._changeScene()
        )
        this.changeButton.addClass('startScreen-button')
    }

    draw(){
        this.changeButton.position(this.xHtml, this.yHtml)
        this.changeButton.center('horizontal')
    }

    _changeScene(){
        this.changeButton.remove()
        actualScene = 'sceneGame'
    }
}