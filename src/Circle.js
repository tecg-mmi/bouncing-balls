export default class Circle {
    constructor(drawingContext) {
        this.drawingContext = drawingContext
        this.radius = 10 + Math.floor(Math.random() * 10)
        this.x = this.radius + Math.floor(Math.random() * (drawingContext.canvasElt.width - 2 * this.radius))
        this.y = this.radius + Math.floor(Math.random() * (drawingContext.canvasElt.height - 2 * this.radius))
        this.velocityX = (3 + Math.floor(Math.random() * 5)) * (Math.random() > 0.5 ? -1 : 1)
        this.velocityY = (3 + Math.floor(Math.random() * 5)) * (Math.random() > 0.5 ? -1 : 1)
        const hue = Math.floor(Math.random() * 360)
        this.color = `hsl(${hue}, 100%, 50%)`
    }

    updateCoordinates() {
        if (this.y >= this.drawingContext.canvasElt.height - this.radius) {
            this.y = this.drawingContext.canvasElt.height - this.radius
            this.velocityY *= -1
        }
        if (this.y < this.radius) {
            this.y = this.radius
            this.velocityY *= -1
        }
        if (this.x >= this.drawingContext.canvasElt.width - this.radius) {
            this.x = this.drawingContext.canvasElt.width - this.radius
            this.velocityX *= -1
        }
        if (this.x < this.radius) {
            this.x = this.radius
            this.velocityX *= -1
        }

        this.x += this.velocityX
        this.y += this.velocityY

        this.draw()
    }

    draw() {
        this.drawingContext.ctx.beginPath()
        this.drawingContext.ctx.fillStyle = this.color
        this.drawingContext.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.drawingContext.ctx.fill()
        this.drawingContext.ctx.closePath()
    }
}
