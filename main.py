def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        basic.show_icon(IconNames.NO)
        for index in range(3):
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digital_write_pin(DigitalPin.P1, 0)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digital_write_pin(DigitalPin.P1, 0)
            basic.pause(1000)
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.pause(1000)
            pins.digital_write_pin(DigitalPin.P1, 0)
            basic.pause(100)
    elif pins.digital_read_pin(DigitalPin.P0) == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)
