import Game from "./game"

class Particle {
    game: Game
    markedForDeletion: boolean
    x!: number
    y!: number
    speedX!: number
    speedY!: number
    size!: number
    constructor(game: Game) {
        this.game = game
        this.markedForDeletion = false
    }
    update() {
        this.x -= this.speedX + this.game.speed
        this.y -= this.speedY
        this.size *= 0.95
        if (this.size < 0.5) this.markedForDeletion = true
    }
}
export class Dust extends Particle {
    size: number
    x: number
    y: number
    speedX: number
    speedY: number
    color: string
    constructor(game: Game, x: number, y: number) {
        super(game)
        this.size = Math.random() * 10 + 10
        this.x = x
        this.y = y
        this.speedX = Math.random()
        this.speedY = Math.random()
        this.color = 'rgba(0,0,0,0.5)'
    }
    draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
    }
}
export class Fire extends Particle {
    image: CanvasImageSource
    size: number
    x: number
    y: number
    speedX: number
    angel: number
    va: number
    constructor(game: Game, x: number, y: number) {
        super(game)
        this.image = document.getElementById('fire') as CanvasImageSource
        this.size = Math.random() * 100 + 50
        this.x = x
        this.y = y
        this.speedX = 1
        this.speedX = 1
        this.angel = 0
        this.va = Math.random() * 0.2 - 0.1
    }
    update() {
        super.update()
        this.angel += this.va
        this.x += Math.sin(this.angel * 10)
    }
    draw(context: CanvasRenderingContext2D) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(this.angel)
        context.drawImage(this.image, -this.size * 0.5, -this.size * 0.5, this.size, this.size)
        context.restore()
    }
}
export class Splash extends Particle {
    size: number
    x: number
    y: number
    speedX: number
    speedY: number
    gravity: number
    image: CanvasImageSource
    constructor(game: Game, x: number, y: number) {
        super(game)
        this.size = Math.random() * 100 + 100
        this.x = x - this.size * 0.4
        this.y = y - this.size * 0.5
        this.speedX = Math.random() * 6 - 4
        this.speedY = Math.random() * 2 + 1
        this.gravity = 0
        this.image = document.getElementById('fire') as CanvasImageSource
    }
    update() {
        super.update()
        this.gravity += 0.1
        this.y += this.gravity
    }
    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
}