const five = require('johnny-five')
const motorAction = require('./constants/motor')
const servoAction = require('./constants/servo')
const DcMotor = require('./motor')

const motor = new DcMotor({
  pins: {
    pwm: process.env.DCMOTOR_PIN_PWM,
    dir: process.env.DCMOTOR_PIN_D1,
    cdir: process.env.DCMOTOR_PIN_D2
  }
})

const servo = new five.Servo({
  pin: process.env.SERVO_PIN,
  startAt: 92,
  range: [0, 180],
  center: true
})

function act (type, data) {
  console.log('In controller: ')
  console.log(type, data)
  switch (type) {
    case motorAction.FORWARD:
      motor.forward(data)
      break
    case motorAction.REVERSE:
      motor.reverse(data)
      break
    case motorAction.SWITCH:
      motor.switchSide()
      break
    case motorAction.STOP:
      motor.stop()
      break
    case servoAction.LEFT:
      servo.to(parseInt(servo.startAt) + parseInt(data)) // Gotta love JS amIrite
      break
    case servoAction.RIGHT:
      servo.to(servo.startAt - data)
      break
    case servoAction.RESET:
      servo.to(servo.startAt)
  }
}

module.exports = {
  act
}
