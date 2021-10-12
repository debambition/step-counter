input.onButtonPressed(Button.A, function () {
    basic.showString("" + (step))
})
input.onButtonPressed(Button.AB, function () {
    front_x = 0
    back_x = 0
    step = 0
    basic.showString("RESET")
})
let step = 0
let back_x = 0
let front_x = 0
front_x = 0
back_x = 0
step = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) <= -200 && front_x == 0) {
        step += 1
        front_x = -200
    } else if (input.acceleration(Dimension.X) >= 0 && front_x == -200) {
        front_x = 0
    } else if (input.acceleration(Dimension.X) >= 200 && back_x == 0) {
        step += 1
        back_x = 200
    } else if (input.acceleration(Dimension.X) <= 0 && back_x == 200) {
        back_x = 0
    }
})
