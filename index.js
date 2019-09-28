const five = require('johnny-five')
require('dotenv').config()

const initBoard = () => {
  const newBoard = new five.Board({
    port: '/dev/rfcomm0'
  })
  newBoard.on('ready', function () {
    const led = new five.Led(13)
    led.blink(500)
    require('./src/keyboardController')({
      reset: initBoard
    })
  })
}

initBoard()
