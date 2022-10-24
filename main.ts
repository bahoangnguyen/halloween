basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.No)
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(100)
        }
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        `)
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
    }
    
})
