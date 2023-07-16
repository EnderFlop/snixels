window.addEventListener('DOMContentLoaded', () => {

  WIDTH = window.innerWidth
  HEIGHT =  window.innerHeight

  const canvas = document.getElementById("container");
  canvas.width = WIDTH
  canvas.height = HEIGHT

  SNAKE_PIXEL_SIZE = Math.floor(window.innerWidth / 25);

  NUMBER_OF_SNAKES = 10
  let snakes = [];

  //TODO:
  //add the dithering effect from Hypnospace Outlaw
  //  take chunks out of the cube? figure out the pattern of dithering and start clearRect'ing 1x1 pixels. Maybe have adverse effects if head size changes. Can we use a mask?
  //add delay slash stagger effect from HO
  //check snake collision? not really neccesary i think
  //make canvas bigger than screen so snakes move in and out. If on mirror, maybe it's fine to have the whole area enclosed? 
  //  it might look weird for things to blip in and out of existence.
  //  maybe if i make a wallpaper engine version i can do the big canvas from the game.
  //figure out how to put on mirror.

  function makeSnakes() {
    const COLORS = [
      "255, 255, 159",
      "255, 182, 173",
      "50, 202, 205",
      "205, 160, 203",
      "166, 234, 209",
      "253, 244, 245",
      "232, 160, 191",
      "186, 144, 198",
      "192, 219, 234",
      "255, 155, 155",
    ]

    for (let i = 0; i < NUMBER_OF_SNAKES; i++) {
      //the random coordinate code ensures that while the snakes are randomly placed, they are still on a "grid"
      const randX = getRandomInt(Math.floor(WIDTH / SNAKE_PIXEL_SIZE)) * SNAKE_PIXEL_SIZE
      const randY = getRandomInt(Math.floor(HEIGHT / SNAKE_PIXEL_SIZE)) * SNAKE_PIXEL_SIZE
      const snakeColor = COLORS[i % COLORS.length]
      snakes.push(new Snake(randX, randY, HEIGHT, WIDTH, snakeColor))
    }
  }

  function getRandomInt(max){
    return Math.floor(Math.random() * max)
  }

  function updateCanvas() {
    const canvas = document.getElementById("container");
    const ctx = canvas.getContext("2d");
    
    //draw background slash reset frame
    ctx.fillStyle = `rgb(68, 68, 68)`
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snakes.forEach((snake) => {
      snake.main()
      ctx.fillStyle = `rgb(${snake.color})`
      ctx.fillRect(snake.x, snake.y, snake.width, snake.height)
      snake.history.forEach((history) => {
        ctx.fillRect(history.x, history.y, snake.width, snake.height)
      })
    })
  }

  makeSnakes()
  setInterval(updateCanvas, 100)

})

class Snake {
  constructor(x, y, height, width, color){
    this.x = x
    this.y = y
    this.stageHeight = height
    this.stageWidth = width
    this.color = color
    this.width = SNAKE_PIXEL_SIZE
    this.height = SNAKE_PIXEL_SIZE
    this.outOfBoundsRange = WIDTH * 0.5
    this.maxLength = Math.max(3, this.getRandomInt(10))
    this.history = []
    this.direction = 0
  }

  getRandomInt(max){
    return Math.floor(Math.random() * max)
  }

  main() {
    this.chooseDirection()
    this.move()
    this.saveHistory()
  }

  saveHistory() {
    if (this.history.length > this.maxLength) {
      this.history.shift()
    }
    this.history.push({x: this.x, y: this.y})
  }

  move() {
    //up
    
    if (this.direction == 0) {
      if (this.x >= this.stageWidth + this.outOfBoundsRange) { this.direction = 2; return}
      this.x += this.height
      return
    }
    //right
    if (this.direction == 1) {
      if (this.y >= this.stageHeight + this.outOfBoundsRange) {this.direction = 3; return}
      this.y += this.width
      return
    }
    //down
    if (this.direction == 2) {
      if (this.x <= 0 - this.outOfBoundsRange) {this.direction = 0; return}
      this.x -= this.height
      return
    }
    //left
    if (this.direction == 3) {
      if (this.y <= 0 - this.outOfBoundsRange) {this.direction = 1; return}
      this.y -= this.width
      return
    }
  }

  chooseDirection(){
    const random = this.getRandomInt(10);
    //move left
    if (random == 8) {
      this.direction -= 1
      if (this.direction < 0) {this.direction = 3}
    } 
    //move right
    else if (random == 9) {
      this.direction += 1
      if (this.direction > 3) {this.direction = 0}
    }
  }
}