import Circle from "./Circle"

const animation = {

    canvasElt: null,
    ctx: null,
    circles: [],
    circlesCount: 12,

    animate() {
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height)
        for (let i = 0; i < this.circlesCount; i++) {
            this.circles[i].updateCoordinates();
        }
        window.requestAnimationFrame(() => {
            this.animate()
        })
    },

    init() {
        this.canvasElt = document.createElement('canvas')
        document.body.insertAdjacentElement('beforeend', this.canvasElt)
        this.canvasElt.width = window.innerWidth
        this.canvasElt.height = window.innerHeight
        this.ctx = this.canvasElt.getContext('2d')

        const drawingContext = {
            canvasElt: this.canvasElt,
            ctx: this.ctx
        }

        for (let i = 0; i < this.circlesCount; i++) {
            this.circles.push(new Circle(drawingContext));
        }

        this.animate()
    },
}

animation.init()
