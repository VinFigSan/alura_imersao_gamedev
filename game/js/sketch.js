function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  sceneGame = new Gameplay()
  sceneStart = new BeginAdventure()
  sceneGame.setup()
  scenes = {
    sceneGame,
    sceneStart 
  }
  managerScene = new Manager("Iniciar Jogo", (width*3)/4, (height*3)/4)
}

function draw() {
  scenes[actualScene].draw()
}

function keyPressed() {
  sceneGame.keyPressed(key)
}