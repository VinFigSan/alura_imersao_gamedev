let scenario
let protagonist
let slime
let troll
let flyingSlime
let pontuation

let imgScenario
let imgProtagonist
let imgSlime
let imgTroll
let imgGameOver
let imgFlyingSlime
const foes=[]

let soundtrack
let jumpSound

const matrizProtagonist = [
  [0,0],
  [220,0],
  [440,0],
  [660,0],
  [0,270],
  [220,270],
  [440,270],
  [660,270],
  [0,540],
  [220,540],
  [440,540],
  [660,540],           
  [0,810],
  [220,810],
  [440,810],
  [660,810],
]
const matrizSlimeFoe = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizTrollFoe = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizFlyingSlimeFoe = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload() {
  imgScenario = loadImage('img/scenario/forest.png')
  imgProtagonist = loadImage('img/protagonist/hipsta.png')
  imgSlime = loadImage('img/foes/slime.png')
  imgTroll = loadImage('img/foes/troll.png')
  imgFlyingSlime = loadImage('img/foes/flyingSlime.png')
  imgGameOver = loadImage('img/assets/gameOver.png')
  soundtrack = loadSound('audio/soundtrack.mp3')
  jumpSound = loadSound('audio/jumpSound.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  scenario = new Scenario(imgScenario, 6)
  protagonist = new Protagonist(matrizProtagonist, imgProtagonist, 0, 30, 220, 270, 220, 270)
  const slime = new Foe(matrizSlimeFoe, imgSlime, width, 0, 104, 104, 104, 104, 15, 30)
  const troll = new Foe(matrizTrollFoe, imgTroll, width + 700, 0, 400, 370, 400, 370, 19, 3000)
  const flyingSlime = new Foe(matrizFlyingSlimeFoe, imgFlyingSlime, width + 500, 270, 200, 150, 200, 150, 24, 1000)
  foes.push(slime, troll, flyingSlime)
  pontuation = new Points()
  //soundtrack.loop()
}

function draw() {
  scenario.show()
  scenario.move()
  pontuation.show()
  pontuation.gainPoints()
  protagonist.show()
  protagonist.applyGravity()
  foes.forEach(foe => {
    foe.show()
    foe.move()
    if (protagonist.colliding(foe)){
      image(imgGameOver, width/2 - 200, height/3 - 100)
      noLoop()
    }
  })
}

function keyPressed() {
  if(key==='ArrowUp'){
    protagonist.jump(jumpSound)
  }
}