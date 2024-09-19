from microbit import *

def lightning_bugs(amount: int, delay_milliseconds: int = 100):
    """
    Display Lights on Random Postion
    
    Args:
        amount (int) : Amount of Lights
        delay_milliseconds (float) : Delay of Lights (Light Time)

    Attributes:
        light_points (dict) : Light Data
        row (int) : Row of Light
        i (int) : Index of Light
        level (int) : Light Level
    
    """
    # LIST FOR LIGHTS
    points = []
    for i in range(amount):
        # RESET
        if points:
            led.plot_brightness(points[0], points[1], 0)
            points.clear()
        # SET VAL
        row = randint(0, 4)
        i = randint(0, 4)
        light_level = randint(1, 255)
        # SET DISPLAY
        led.plot_brightness(row, i, light_level)
        points.append(row)
        points.append(i)
        points.append(light_level)
        # DELAY
        basic.pause(delay_milliseconds)

lightning_bugs(20)