class Points{
    constructor(){
        this.points = 0
    }

    show(){
        fill('#fff')
        textAlign(RIGHT)
        textSize(75)
        text(parseInt(this.points), width - 50, 95)
    }

    gainPoints(){
        this.points = this.points + 0.2
    }
}