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
  let INTERVAL = 100;
  let DO_DITHER = true;
  let FADE_IN = true;
  MIN_SIZE = 19;
  MAX_SIZE = 19;
  COLOR_PROFILE = "Original"

  SNAKE_PRESETS = {
    "Default": {
      snakeCount: 100,
      scale: 1,
      interval: 100,
      do_dither: true,
      fade_in: true,
      minSize: 19,
      maxSize: 19
    },
    "Hypnospace": {
      snakeCount: 10,
      scale: 8,
      interval: 500,
      do_dither: true,
      fade_in: false,
      minSize: 4,
      maxSize: 19
    },
    "Chaos" : {
      snakeCount: 5000,
      scale: 1,
      interval: 1,
      do_dither: false,
      fade_in: false,
      minSize: 3,
      maxSize: 19
    },
    "Raceway" : {
      snakeCount: 100,
      scale: 5,
      interval: 20,
      do_dither: true,
      fade_in: false,
      minSize: 6,
      maxSize: 19
    },
    "Ants": {
      snakeCount: 10000,
      scale: 0.1,
      interval: 1,
      do_dither: false,
      fade_in: false,      
      minSize: 1,
      maxSize: 19
    },
    "Spaghetti": {
      snakeCount: 200,
      scale: 1,
      interval: 1,
      do_dither: false,
      fade_in: false,      
      minSize: 500,
      maxSize: 500
    }
  }

  //FIRST VALUE IN EACH LIST IS BACKGROUND COLOR
  COLOR_PRESETS = {
    "Original": [
      "68, 68, 68",
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
    ],
    "Old School": [
      "0, 0, 0",
      "0, 0, 255",
      "0, 255, 0",
      "255, 0, 0",
      "255, 0, 255",
      "255, 255, 0",
      "0, 255, 255",
      "255, 255, 255",
    ],
    "Matrix": [
      "13, 2, 8",
      "0, 59, 0",
      "0, 143, 17",
      "0, 255, 65",
    ],
    "Candy": [
      "1, 205, 254",
      "255, 113, 206",
      "5, 255, 161",
      "185, 103, 255",
      "255, 251, 150",
      "255, 153, 0",
    ],
    "Sunset": [
      "48, 3, 80",
      "148, 22, 127",
      "233, 52, 121",
      "249, 172, 83",
      "246, 46, 151",
      "20, 60, 180",
    ]
  }

  SNAKE_PIXEL_SIZE = 8;
  EFFECTIVE_SIZE = getEffectiveSize();
  
  let snakes = [];

  //TODO:
  // adjust code so instead of turning pixels background color, we actually make it transparent

  function makeSnakes() {
    snakes = []

    for (let i = 0; i < NUMBER_OF_SNAKES; i++) {
      //the random coordinate code ensures that while the snakes are randomly placed, they are still on a "grid"
      const randX = getRandomInt(Math.floor(WIDTH / EFFECTIVE_SIZE)) * EFFECTIVE_SIZE
      const randY = getRandomInt(Math.floor(HEIGHT / EFFECTIVE_SIZE)) * EFFECTIVE_SIZE
      const colorList = COLOR_PRESETS[COLOR_PROFILE].slice(1)
      const snakeColor = colorList[i % colorList.length]
      snakes.push(new Snake(randX, randY, HEIGHT, WIDTH, snakeColor))
    }
  }

  function getRandomInt(max){
    return Math.floor(Math.random() * max)
  }

  function getEffectiveSize() {
    return SNAKE_PIXEL_SIZE * SCALE
  }

  function updateCanvas() {
    const canvas = document.getElementById("container");
    const ctx = canvas.getContext("2d");
    
    //draw background slash reset frame
    resetPenToBackgroundColor(ctx)
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snakes.forEach((snake) => {
      snake.main()
      resetPenToSnakeColor(ctx, snake)
      ctx.fillRect(snake.x, snake.y, EFFECTIVE_SIZE, EFFECTIVE_SIZE)
      if (FADE_IN) {
        level = snake.maxLength
      } else {
        level = snake.history.length - 1
      }
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
    resetPenToBackgroundColor(ctx)
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

  function resetPenToBackgroundColor(ctx) {
    ctx.fillStyle = `rgb(${COLOR_PRESETS[COLOR_PROFILE][0]})`
  }

  //only accepts numbers as input.
  function validateInput(input) {
    return !isNaN(input) && input != ""
  }

  function setupButtons() {
    const resetButton = document.getElementById("reset")
    resetButton.onclick = () => {
      //retrieve input values and change globals

      const snakeInput = document.getElementById("snakeNumber")
      NUMBER_OF_SNAKES = (validateInput(snakeInput.value) ? snakeInput.value : snakeInput.placeholder)

      const scaleInput = document.getElementById("scale")
      SCALE = (validateInput(scaleInput.value) ? scaleInput.value : scaleInput.placeholder)

      const intervalInput = document.getElementById("interval")
      INTERVAL = (validateInput(intervalInput.value) ? intervalInput.value : intervalInput.placeholder)

      const minSizeInput = document.getElementById("min")
      MIN_SIZE = (validateInput(minSizeInput.value) ? minSizeInput.value : minSizeInput.placeholder)

      const maxSizeInput = document.getElementById("max")
      MAX_SIZE = (validateInput(maxSizeInput.value) ? maxSizeInput.value : maxSizeInput.placeholder)

      main();
    }

    const maxSizeInput = document.getElementById("max")
    const minSizeInput = document.getElementById("min")

    maxSizeInput.addEventListener("change", (event) => {
      let val = event.target.value
      if (!validateInput(val)) { return; }
      val = Number.parseInt(val)
      if (DO_DITHER && val > 19) {
        maxSizeInput.value = 19
        alert("MAX-SIZE cannot exceed 19 with DITHER on.")
      }
      else if (val < Number.parseInt(minSizeInput.value)) {
        maxSizeInput.value = minSizeInput.value
        alert("MAX-SIZE cannot be below MIN-SIZE")
      }
    })

    minSizeInput.addEventListener("change", (event) => {
      let val = event.target.value
      if (!validateInput(val)) { return; }
      val = Number.parseInt(val)
      if (val < 0) {
        minSizeInput.value = 1
        alert("MIN-SIZE cannot be below 0.")
      }
      else if (val > Number.parseInt(maxSizeInput.value) || (maxSizeInput.value == "" && val > Number.parseInt(maxSizeInput.placeholder))) {
        minSizeInput.value = maxSizeInput.value
        alert("MIN-SIZE cannot exceed MAX-SIZE.")
      }
    })

    const ditherButton = document.getElementById("dither")
    ditherButton.onclick = () => {
      if (!DO_DITHER && Number.parseInt(maxSizeInput.value) > 19) {
        alert("DITHER cannot be turned on while MAX-SIZE is over 19.")
      } else {
        DO_DITHER = !DO_DITHER;
        ditherButton.innerHTML = "DITHER: " + (DO_DITHER ? "TRUE" : "FALSE") //yes, i know this is a little stupid. I want it to be ALL CAPS though.  
      }

      adjustFadeButton()
    }
    
    const fadeButton = document.getElementById("fade-in")
    fadeButton.onclick = () => {
      FADE_IN = !FADE_IN;
      fadeButton.innerHTML = "FADE-IN: " + (FADE_IN ? "TRUE" : "FALSE")
    }

    //load presets
    presetBox = document.getElementById("presets")
    presetBox.innerHTML = ""
    for (const [presetName, preset] of Object.entries(SNAKE_PRESETS)) {
      const newButton = document.createElement("button")
      newButton.classList.add("preset")
      newButton.innerHTML = presetName

      newButton.onclick = () => {
        NUMBER_OF_SNAKES = preset.snakeCount
        SCALE = preset.scale
        INTERVAL = preset.interval
        DO_DITHER = preset.do_dither
        FADE_IN = preset.fade_in
        MIN_SIZE = preset.minSize
        MAX_SIZE = preset.maxSize

        //clear fields and change placeholders to preset values
        document.getElementById("snakeNumber").value = ""
        document.getElementById("snakeNumber").placeholder = preset.snakeCount
        document.getElementById("scale").value = ""
        document.getElementById("scale").placeholder = preset.scale
        document.getElementById("interval").value = ""
        document.getElementById("interval").placeholder = preset.interval
        document.getElementById("min").value = ""
        document.getElementById("min").placeholder = preset.minSize
        document.getElementById("max").value = ""
        document.getElementById("max").placeholder = preset.maxSize
        document.getElementById("dither").innerHTML = "DITHER: " + (DO_DITHER ? "TRUE" : "FALSE")
        adjustFadeButton()

        main()
      }

      presetBox.appendChild(newButton)
    }

    //load color profile buttons
    colorPresets = document.getElementById("colors")
    colorPresets.innerHTML = ""
    for (const [presetName, colorList] of Object.entries(COLOR_PRESETS)) {
      const newButton = document.createElement("button")
      newButton.classList.add("colorButton")
      newButton.innerHTML = presetName

      newButton.onclick = () => {
        COLOR_PROFILE = presetName
        snakes.forEach((snake) => {
          const randomColor = colorList[getRandomInt(colorList.length - 1) + 1] //ensures index 0 (background) can't be hit.
          snake.color = randomColor
        })
      }

      colorPresets.appendChild(newButton)
    }
  }

  function adjustFadeButton() {
    const fadeButton = document.getElementById("fade-in")
    if (!DO_DITHER) {
      fadeButton.disabled = true
      fadeButton.innerHTML = "FADE-IN: DISABLED"
    } else {
      fadeButton.disabled = false
      fadeButton.innerHTML = "FADE-IN: " + (FADE_IN ? "TRUE" : "FALSE")
    }
  }

  function main() {
    clearInterval(timeout);
    EFFECTIVE_SIZE = getEffectiveSize()
    makeSnakes()
    updateCanvas()
    timeout = setInterval(updateCanvas, INTERVAL)
    setupButtons()
  }
  
  let timeout;
  main()
})

class Snake {
  constructor(x, y, height, width, color){
    this.x = x
    this.y = y
    this.stageHeight = height
    this.stageWidth = width
    this.color = color
    this.outOfBoundsRange = WIDTH * 0.2
    this.maxLength = Math.max(MIN_SIZE, this.getRandomInt(MAX_SIZE))
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