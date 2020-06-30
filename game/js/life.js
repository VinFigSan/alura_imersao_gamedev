class Life{
    constructor(lifeMax, lifeIni){
        this.lifeIni = lifeIni
        this.lifeMax = lifeMax
        this.life = this.lifeIni
        this.xIni = 20
        this.yIni = 20
        this.width = 90
        this.height = 90
    }

    draw(){
        for(let i=0; i < this.life; i++){
            const margin = i * 10
            const position = this.xIni * (i + 1)
            image(imgHearth, position + margin, this.yIni, this.width, this.height)
        }
    }

    gainLife(){
        if(this.life <= this.lifeMax){
            this.life++
        }
    }

    loseLife(){
        this.life--
    }
}