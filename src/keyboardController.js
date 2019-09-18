const hooker = require('iohook')
const keys = require('./constants/keys')
const controller = require('./controller')
let calledFlag = false
const motorAction = require('./constants/motor')
const servoActon = require('./constants/servo')

hooker.on('keydown', function ({ keycode }) {
  switch (keycode) {
    case keys.UP:
      if (!calledFlag) {
        calledFlag = true
        controller.act(motorAction.FORWARD, process.env.DC_SPEED)
      }
      break

    case keys.DOWN:
      if (!calledFlag) {
        calledFlag = true
        controller.act(motorAction.FORWARD, process.env.DC_SPEED)
      }
      break

    case keys.LEFT:
      controller.act(servoActon.LEFT, process.env.STEER_ANGLE)
      break

    case keys.RIGHT:
      controller.act(servoActon.RIGHT, process.env.STEER_ANGLE)
      break
  }
})

hooker.on('keyup', function ({ keycode }) {
  switch (keycode) {
    case keys.UP:
    case keys.DOWN:
      controller.act(controller.act(motorAction.STOP))
      calledFlag = false
      break
    case keys.LEFT:
    case keys.RIGHT:
      controller.act(servoActon.RESET)
      break
  }
})

hooker.start()

module.exports = hooker
