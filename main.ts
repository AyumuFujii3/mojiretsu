basic.showIcon(IconNames.Sad)
basic.forever(function () {
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . . . . #
        . # . # .
        . . # . .
        . # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . . . # .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . #
        # # # # #
        . . . . #
        `)
    basic.pause(1000)
})
