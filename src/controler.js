const five = require('johnny-five')
const motorAction = require('./constants/motor')
const servoAction = require('./constants/servo')
const dcMotor = require('./motor')
const controler;

const motor = new dcMotor({
    pins: {
        pwm: process.env.DCMOTOR_PIN_PWM || 9,
        dir: process.env.DCMOTOR_PIN_D1 || 7,
        cdir: process.env.DCMOTOR_PIN_D2 || 8,
    }
})

const servo = new five.Servo({
    pin: process.env.SERVO_PIN,
    startAt: 90
})

function act (type, data) {
    switch (type) {
        case motorAction.FORWARD:
        motor.forward(data)
        break;
        case motorAction.REVERSE:
        motor.reverse(data)
        break;
        case motorAction.SWITCH:
        motor.switchSide()
        break;
        case motorAction.STOP:
        motor.stop()
        break; 
        case servoAction.LEFT:
        servo.to(servo.startAt - data)
        break;
        case servoAction.RIGHT:
        servo.to(servo.startAt + data)
        break;
    }
}
