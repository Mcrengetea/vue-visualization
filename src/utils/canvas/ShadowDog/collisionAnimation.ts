import Game from "./game"

export class CollisionAnimation{
    game: Game
    image: CanvasImageSource
    spritWidth: number
    spritHeight: number
    sizeModifier: number
    width: number
    height: number
    x: number
    y: number
    frameX: number
    maxFrame: number
    markedForDeletion: boolean
    fps: number
    frameInterval: number
    frameTimer: number
    constructor(game: Game,x: number,y: number){
        this.game=game
        this.image=document.getElementById('collisionAnimation') as CanvasImageSource
        this.spritWidth=100
        this.spritHeight=90
        this.sizeModifier=Math.random()+0.5
        this.width=this.sizeModifier*this.spritWidth
        this.height=this.sizeModifier*this.spritHeight
        this.x=x-this.width*0.5
        this.y=y-this.height*0.5
        this.frameX=0
        this.maxFrame=4
        this.markedForDeletion=false
        this.fps=Math.random()*10+5
        this.frameInterval=1000/this.fps
        this.frameTimer=0
    }
    draw(context: CanvasRenderingContext2D){
        context.drawImage(this.image,this.frameX*this.spritWidth,0,this.spritWidth,this.spritHeight,this.x,this.y,this.width,this.height)
    }
    update(deltaTime: number) {
     this.x-=this.game.speed  
     if(this.frameTimer>this.frameInterval){
        this.frameX++
        this.frameTimer=0
     }else{
        this.frameTimer+=deltaTime
     }

     if(this.frameX>this.maxFrame){
        this.markedForDeletion=true
     } 
    }
}