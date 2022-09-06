import Game from "./game"

class Layer {
    game: Game
    width: number
    height: number
    speedModifier: number
    image: CanvasImageSource
    x: number
    y: number
    constructor(game: Game, width: number, height: number, speedModifier: number, image: CanvasImageSource) {
        this.game = game
        this.width = width
        this.height = height
        this.speedModifier = speedModifier
        this.image = image
        this.x = 0
        this.y = 0
    }
    update() {
        if (this.x < -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifier
    }
    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
}
export class BackGround {
    game: Game
    width: number
    height: number
    layerImage1: CanvasImageSource
    layerImage2: CanvasImageSource
    layerImage3: CanvasImageSource
    layerImage4: CanvasImageSource
    layerImage5: CanvasImageSource
    layer1: Layer
    layer2: Layer
    layer3: Layer
    layer4: Layer
    layer5: Layer
    BackGroundLayers: Layer[]
    constructor(game: Game) {
        this.game = game
        this.width = 1667
        this.height = 500
        this.layerImage1 = document.getElementById('layer1') as CanvasImageSource
        this.layerImage2 = document.getElementById('layer2') as CanvasImageSource
        this.layerImage3 = document.getElementById('layer3') as CanvasImageSource
        this.layerImage4 = document.getElementById('layer4') as CanvasImageSource
        this.layerImage5 = document.getElementById('layer5') as CanvasImageSource
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layerImage1)
        this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layerImage2)
        this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layerImage3)
        this.layer4 = new Layer(this.game, this.width, this.height, 0.6, this.layerImage4)
        this.layer5 = new Layer(this.game, this.width, this.height, 0.8, this.layerImage5)
        this.BackGroundLayers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5]
    }
    update() {
        this.BackGroundLayers.forEach(layer => {
            layer.update()
        })
    }
    draw(context: CanvasRenderingContext2D) {
        this.BackGroundLayers.forEach(layer => {
            layer.draw(context)
        })
    }
}