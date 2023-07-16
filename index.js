window.addEventListener('DOMContentLoaded', () => {

  WIDTH = window.innerWidth
  HEIGHT =  window.innerHeight

  const DITHERS = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0], [255, 0, 0, 0, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 
    0, 0, 0, 0, 0, 0], [255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 
    0, 0, 0, 0, 0], [255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 
    0, 0, 0, 255, 0, 0], [255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 0, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 0, 0, 255, 0, 0], [255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255], [255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255], [255, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255, 255, 0, 255, 0, 
    255, 0, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255], [255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 
    255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 0, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255], [255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255], [255, 0, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 0, 255, 255, 
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]

  const canvas = document.getElementById("container");
  canvas.width = WIDTH
  canvas.height = HEIGHT

  //CHANGE THESE VALUES
  let NUMBER_OF_SNAKES = 100
  let SCALE = 1;
  let DO_DITHER = true;

  // small: snakes=100~200, scale=1
  // Hypnospace: snakes=10, scale=8

  SNAKE_PIXEL_SIZE = 8;
  EFFECTIVE_SIZE = SNAKE_PIXEL_SIZE * SCALE
  BACKGROUND_RGB = `rgb(68, 68, 68)`
  
  let snakes = [];

  //TODO:
  //add levers on the site to customize it yourself?
  // adjust code so instead of turning pixels background color, we actually make it transparent

  function makeSnakes() {
    snakes = []
    const COLORS = [
      "50, 202, 205",
      "255, 255, 159",
      "255, 182, 173",
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
      const randX = getRandomInt(Math.floor(WIDTH / EFFECTIVE_SIZE)) * EFFECTIVE_SIZE
      const randY = getRandomInt(Math.floor(HEIGHT / EFFECTIVE_SIZE)) * EFFECTIVE_SIZE
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
    ctx.fillStyle = BACKGROUND_RGB
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snakes.forEach((snake) => {
      snake.main()
      resetPenToSnakeColor(ctx, snake)
      ctx.fillRect(snake.x, snake.y, EFFECTIVE_SIZE, EFFECTIVE_SIZE)
      level = 19
      //level = snake.history.length - 1
      // ^ 19 gives awesome fade-in effect. only works for snakes of length 19. 
      //for a more regular look, use "level = snake.history.length - 1"
      snake.history.forEach((history) => {
        ctx.fillRect(history.x, history.y, EFFECTIVE_SIZE, EFFECTIVE_SIZE)
        if (DO_DITHER) {
          dither(level, history, ctx, snake)
        }
        level--;
      })
    })
    
  }

  function dither(level, history, ctx, snake) {
    dither_mask = DITHERS[level]
    ctx.fillStyle = BACKGROUND_RGB
    for (let pixel = 0; pixel < dither_mask.length; pixel++) {
      if( dither_mask[pixel] == 255 ) {
        const currentX = history.x + (pixel * SCALE % EFFECTIVE_SIZE)
        const currentY = history.y + Math.floor(pixel * SCALE / EFFECTIVE_SIZE) * SCALE
        ctx.fillRect(currentX, currentY, SCALE, SCALE)
      }
    }
    resetPenToSnakeColor(ctx, snake)
  }

  function resetPenToSnakeColor(ctx, snake) {
    ctx.fillStyle = `rgb(${snake.color})`
  }

  makeSnakes()
  updateCanvas()
  setInterval(updateCanvas, 100)

})

class Snake {
  constructor(x, y, height, width, color){
    this.x = x
    this.y = y
    this.stageHeight = height
    this.stageWidth = width
    this.color = color
    this.outOfBoundsRange = WIDTH * 0.5
    this.maxLength = 19
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
      this.x += EFFECTIVE_SIZE
      return
    }
    //right
    if (this.direction == 1) {
      if (this.y >= this.stageHeight + this.outOfBoundsRange) {this.direction = 3; return}
      this.y += EFFECTIVE_SIZE
      return
    }
    //down
    if (this.direction == 2) {
      if (this.x <= 0 - this.outOfBoundsRange) {this.direction = 0; return}
      this.x -= EFFECTIVE_SIZE
      return
    }
    //left
    if (this.direction == 3) {
      if (this.y <= 0 - this.outOfBoundsRange) {this.direction = 1; return}
      this.y -= EFFECTIVE_SIZE
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