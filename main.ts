for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        if (x % 2 != 0) {
            for (let index = 0; index < 4; index++) {
                led.plot(x, 4 - y)
                basic.pause(25)
            }
        } else {
            for (let index = 0; index < 4; index++) {
                led.plot(x, y)
                basic.pause(25)
            }
        }
    }
}
basic.forever(function () {
	
})
