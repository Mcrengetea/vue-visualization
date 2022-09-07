import { BackGround } from "./Background";
import { ClimbingEnemy, FlyingEnemy, GroundEnemy } from "./Enemies";
import { Dust, Fire, Splash } from "./Particle";
import { CollisionAnimation } from "./CollisionAnimation";
import { FloatingMessage } from "./FloatingMessage";
import { InputHandler } from "./Input";
import { Player } from "./Player";
import { UI } from "./UI";

export default class Game {
    public width: number;
    public height: number;
    public groundMargin: number;
    public speed: number;
    public maxSpeed: number;
    public background: BackGround;
    public player: Player;
    public input: InputHandler;
    public ui: UI;
    public enemies: (ClimbingEnemy | FlyingEnemy | GroundEnemy)[];
    public particles: (Dust | Fire | Splash)[];
    public collisions: CollisionAnimation[];
    public floatingMessages: FloatingMessage[];
    public maxParticles: number;;
    public enemyInterval: number;
    public enemyTimer: number;
    public debug: boolean;
    public score: number;
    public fontColor: string;
    public time: number;
    public maxTime: number;
    public gameOver: boolean;
    public lives: number;
    public winningScore: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.groundMargin = 80;
        this.speed = 0;
        this.maxSpeed = 3;
        this.background = new BackGround(this);
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.enemies = [];
        this.particles = [];
        this.collisions = [];
        this.floatingMessages = [];
        this.maxParticles = 50;
        this.enemyInterval = 1000; //新敌人加入画面的速度，可以调节敌人出现的速度
        this.enemyTimer = 0;
        this.debug = false;
        this.score = 0;
        this.fontColor = 'black';
        this.time = 0;
        this.maxTime = 60000;
        this.gameOver = false;
        this.lives = 5;
        this.winningScore = 40;
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
    }

    update(deltaTime: number) {
        this.time += deltaTime;
        if (this.time > this.maxTime) this.gameOver = true;
        this.background.update();
        this.player.update(this.input.keys, deltaTime);
        // 敌人的更新控制
        if (this.enemyTimer > this.enemyInterval) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }
        this.enemies.forEach((enemy: ClimbingEnemy | FlyingEnemy | GroundEnemy) => {
            enemy.update(deltaTime);

        });
        // 处理消除敌人消息
        this.floatingMessages.forEach(message => {
            message.update();
        });
        // 处理粒子效果
        this.particles.forEach((particle, index) => {
            particle.update();
        });
        if (this.particles.length > this.maxParticles) {
            this.particles.length = this.maxParticles;
        };

        //    处理碰撞动画效果
        this.collisions.forEach((collision, index) => {
            collision.update(deltaTime);
        });

        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        this.particles = this.particles.filter(particle => !particle.markedForDeletion);
        this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);
        this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);

    }

    draw(context: CanvasRenderingContext2D) {
        this.background.draw(context);
        this.player.draw(context);
        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });
        this.particles.forEach(particle => {
            particle.draw(context);
        });
        this.collisions.forEach(collision => {
            collision.draw(context);
        });
        this.floatingMessages.forEach(message => {
            message.draw(context);
        });
        this.ui.draw(context);
    }

    addEnemy() {
        if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
        else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
        this.enemies.push(new FlyingEnemy(this));
    }
}