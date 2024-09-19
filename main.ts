function lightning_bugs(amount: number, delay_milliseconds: number = 100) {
    let i: number;
    let row: number;
    let light_level: number;
    /** 
    Display Lights on Random Postion
    
    Args:
        amount (int) : Amount of Lights
        delay_milliseconds (float) : Delay of Lights (Light Time)

    Attributes:
        light_points (dict) : Light Data
        row (int) : Row of Light
        i (int) : Index of Light
        level (int) : Light Level
    
    
 */
    //  LIST FOR LIGHTS
    let points = []
    for (i = 0; i < amount; i++) {
        //  RESET
        if (points) {
            led.plotBrightness(points[0], points[1], 0)
            _py.py_array_clear(points)
        }
        
        //  SET VAL
        row = randint(0, 4)
        i = randint(0, 4)
        light_level = randint(1, 255)
        //  SET DISPLAY
        led.plotBrightness(row, i, light_level)
        points.push(row)
        points.push(i)
        points.push(light_level)
        //  DELAY
        basic.pause(delay_milliseconds)
    }
}

lightning_bugs(20)
