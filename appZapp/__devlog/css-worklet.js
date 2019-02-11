/*
    Research: Houdini’s paint worklet
    2019.2.11
*/
if (typeof registerPaint !== 'undefined') {

    class Dots {
        static get inputProperties() {
            return[
                '--circle-color',
                '--circle-size',
                '--circle-spacing',
                'color'
            ]
        }
        paint(ctx, geometry, properties) {

        //  let color = properties.get('--circle-color')
            let color = 'pink'

            let x = geometry.width / 2,
                y = geometry.height / 2,
                radius = 100,
                startAngle = 0,
                endAngle = Math.PI * 2

            // draw
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc( x, y, radius, startAngle, endAngle )
            ctx.fill()
        }
    }

    registerPaint('dots', Dots)

} else console.log(':: registerPaint not a function')
