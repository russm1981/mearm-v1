input.onButtonPressed(Button.A, function () {
    mearm.openGrip()
})
input.onButtonPressed(Button.AB, function () {
    reset()
})
input.onButtonPressed(Button.B, function () {
    mearm.closeGrip()
})
function reset () {
    mearm.moveToCentre(MearmServo.Base)
    mearm.moveToCentre(MearmServo.Right)
    mearm.moveToCentre(MearmServo.Left)
    mearm.moveToCentre(MearmServo.Grip)
}
reset()
basic.forever(function () {
    if (mearm.joystick(Joystick.LeftJoyX) < 0) {
        mearm.moveByAngle(MearmServo.Base, -1)
    } else if (mearm.joystick(Joystick.LeftJoyX) > 0) {
        mearm.moveByAngle(MearmServo.Base, 1)
    }
    if (mearm.joystick(Joystick.LeftJoyY) < 0) {
        mearm.moveByAngle(MearmServo.Right, -1)
    } else if (mearm.joystick(Joystick.LeftJoyY) > 0) {
        mearm.moveByAngle(MearmServo.Right, 1)
    }
    if (mearm.joystick(Joystick.RightJoyY) < 0) {
        mearm.moveByAngle(MearmServo.Left, -1)
    } else if (mearm.joystick(Joystick.RightJoyY) > 0) {
        mearm.moveByAngle(MearmServo.Left, 1)
    }
    if (mearm.joystick(Joystick.RightJoyX) < 0) {
        mearm.moveByAngle(MearmServo.Grip, -1)
    } else if (mearm.joystick(Joystick.RightJoyX) > 0) {
        mearm.moveByAngle(MearmServo.Grip, 1)
    }
})
