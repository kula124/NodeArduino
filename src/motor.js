const five = require('johnny-five')

class dcMotor {
    constructor (settings) {
        const { pins, invertPWM } = settings
        this.motorPins = pins
        this.invertPWM = invertPWM
        this._motor = new five.Motor({
            pins, 
            invertPWM
        })
        this.switchSide = this.switchSide.bind(this)
        this.motor = this.motor.bind(this)
        this.switchSide = this.switchSide.bind(this)
        this.forward = this.forward.bind(this)
        this.reverse = this.reverse.bind(this)
    }

    turnOn () {
        this._motor.isOn = true
    }

    motor () {
        return this._motor ? this._motor : null
    }
 
    forward (speed) {
        if (!this.motor()) {
            return
        }
        this.motor().forward(speed)
    }

    reverse (speed) {
        if (!this.motor()) {
            return
        }
        this.motor().reverse(speed);
    }

    stop () {
        if (!this.motor()) {
            return
        }
        this.motor().stop()
    }

    switchSide () {
        this._motor.isOn = false
        const { dir, cdir, pwm } = this.motorPins
        const newPins = {
            dir: cdir,
            cdir: dir,
            pwm
        }
        const newMotor = new five.Motor({
            pins: newPins,
            invertPWM: this.settings.invertPWM
        })
        this._motor = newMotor
    }
}

module.exports = dcMotor
