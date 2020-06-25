let scenario
let protagonist
let slime
let imgScenario
let imgProtagonist
let imgEnemy
let imgGameOver
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

function preload() {
  imgScenario = loadImage('style/img/scenario/forest.png')
  imgProtagonist = loadImage('style/img/protagonist/hipsta.png')
  imgEnemy = loadImage('style/img/foes/slime.png')
  soundtrack = loadSound('audio/soundtrack.mp3')
  jumpSound = loadSound('audio/jumpSound.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  scenario = new Scenario(imgScenario, 6)
  protagonist = new Protagonist(matrizProtagonist, imgProtagonist, 0, 220, 270, 220, 270)
  slime = new Slime(matrizSlimeFoe, imgEnemy, width - 104, 104, 104, 104, 104, 15)
  //soundtrack.loop()
}

function draw() {
  scenario.show()
  scenario.move()
  protagonist.show()
  protagonist.applyGravity()
  slime.show()
  slime.move()
  if (protagonist.colliding(slime)){
    noLoop()
  }
}

function keyPressed() {
  if(key==='ArrowUp'){
    protagonist.jump()
    jumpSound.play()
  }
}