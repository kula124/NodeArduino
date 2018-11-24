const dcMotor = require( './src/motor')
const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(13);
  led.blink(500);
  const motor = new  dcMotor({
    pins: {
      pwm:9,
      dir:8,
      cdir: 7
  }})
 /*const motor = new five.Motor({
  pins: {
    pwm:9,
    dir:8,
    cdir: 7
}
 })*/
 motor.forward(255)
})