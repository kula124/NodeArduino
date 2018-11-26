const five = require("johnny-five");
require('dotenv').config()
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(13);
  led.blink(500);

  const keyboardControler = require('./src/keyboardControler')
})
