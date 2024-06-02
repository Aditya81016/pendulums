# Pendulums

A multi pendulums simulation made in vanilla javascript, html and css.
It uses SVG to render graphics.
This was a practise project I build within a 2-3 hours with no external help.

## GOAL

The website simulates a set pendulums which is generated as per the configurations provided via url query parameters.

## CONFIGURATIONS

Using the query parameters in the url you can change some constants used in the simulation to customize the simulate as per your liking.

Available constants are:
| Key | Type | Default | Random | Description |
| --- | ---- | ------- | ------ | ----------- |
| pendulums | number | 3 | 5 to 2 | Number of pendulums |
| speeds | number[] or undefined | undefined | PI \* (5 to -5)[] | Speed of each pendulum |
| speed | number | Math.PI | Math.PI \* ((-1 to -5) or (5 to 1)) | Primary speed |
| speedGap | number | 1 | (-1 to -5) or (5 to 1) | Fraction by which speed of each pendulums will differ |
| heights | number[] or undefined | undefined | undefined or (100.000 to 50.000)[] | Height of each pendulum |
| height | number | 100 | 100.000 to 50.000 | Primary height |
| heightGap | number | 0.5 | 0.000 to -0.750 | Fraction by which height of each pendulum will differ |
| widths | number[] or undefined | undefined | undefined | Width of each pendulum |
| width | number | 5 | 10.000 to 5.000 | Primary width |
| widthGap | number | 0.1 | 0.000 to -0.250 | Fraction by which width of each pendulum will differ |
| angles | number[] or undefined | undefined | undefined or (PI.000 to -PI.000)[] | Angle of each pendulum |
| angle | number | Math.PI / 2 | Math.PI \* 2.000 to -Math.PI \* 2.000 | Primary angle |
| angleGap | number | Math.PI | 1.000 to -1.000 | Fraction by which angle of each pendulum will differ |
| saturation | number | 85 | 0.000 to 100.000 | Saturation of pendulums color |
| lightness | number | 50 | 0.000 to 100.000 | Lightness of pendulums color |
| colors | color[] or undefined | undefined | undefined or color[] | Color of each pendulum |
| color | number | 360 | 0.000 to 360.000 | Primary color |
| colorGap | number | 0.5 | 1.000 to 0.000 | Fraction by which color of each pendulum will differ |
| lineWidth | number | 2 | 5.000 to 1.000 | Width of line drawn by pendulum |
| lineColor | color | #fff | color 85 85 | Color of line drawn by pendulum |
| lineFill | color | #222 | color 50 10 | Color of background of the graphic drawn by pendulum |
| random | boolean | false | true | randomizes each config options which are not set in query params |

Eg: https://aditya81016.github.io/pendulums?pendulum=3&speeds=[8,10,16]&random
