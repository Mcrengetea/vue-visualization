export class Game {
    private dom: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private chessColor: string[];
    private step: number;
    private map: number[][];
    private mode: number[][];
    private chessboardSize: number;
    public currentPlayer: number;
    public gameOver: boolean;

    constructor(dom: HTMLCanvasElement) {
        // 获取canvas节点
        this.dom = dom;
        // 获取canvas节点画笔
        this.context = dom.getContext('2d');
        // 棋子颜色
        this.chessColor = ['#000', '#fff'];
        //步数
        this.step = 0;
        //棋盘状态
        this.map = [];
        this.mode = [
            [1, 0], //水平
            [0, 1], //垂直
            [1, 1], //右下左上
            [1, -1]];//右上左下
        this.chessboardSize = 15;
        this.currentPlayer = 0;
        this.gameOver = false;
    }

    // 初始化游戏
    init() {
        this.initMap();
        this.drawChessboard();
        // 绑定事件对象
        this.dom.addEventListener('click', this.play.bind(this));
    }

    // 初始化棋盘状态
    initMap() {
        for (let i = 0; i < this.chessboardSize; i++) {
            this.map[i] = [];
            for (let j = 0; j < this.chessboardSize; j++) {
                this.map[i][j] = -1;
            }
        }
    }

    // 画棋盘
    drawChessboard() {
        if (this.context !== null) {
            this.context.clearRect(0, 0, this.dom.width, this.dom.width);
            for (let i = 0; i < this.chessboardSize; i++) {
                this.context.beginPath();
                // 画横线
                this.context.moveTo(15, i * 30 + 15);
                this.context.lineTo(435, i * 30 + 15);
                // 画竖线
                this.context.moveTo(i * 30 + 15, 15);
                this.context.lineTo(i * 30 + 15, 435);
                this.context.stroke();
            }
            // 绘制游戏信息
            this.context.fillStyle = '#fff';
            this.context.fillRect(450, 0, 150, 450);
            this.context.fillStyle = '#000';
            this.context.font = "20px '微软雅黑'";
            this.context.fillText('当前落子方', 470, 100);
            this.context.font = "16px '微软雅黑'";
            this.context.fillText('黑棋', 505, 150);
            // 重新开始按钮
            this.fillRoundRect(this.context, 470, 300, 110, 40, 8, '#66ccff');
            this.context.fillStyle = '#000';
            this.context.font = "20px '微软雅黑'";
            this.context.fillText('重新开始', 485, 325);
        }
    }

    // 画棋子
    drawChess(x: number, y: number, player: number) {
        if (this.context !== null) {
            this.context.fillStyle = this.chessColor[player];
            this.map[x][y] = player;
            this.context.beginPath();
            this.context.arc(x * 30 + 15, y * 30 + 15, 12, 0, Math.PI * 2, false);// (x,y,半径,起始点,3.14,逆时针)
            this.context.fill();
            this.context.stroke();
            this.drawGameInfo(this.context);
        }
    }

    // 绘制游戏信息
    drawGameInfo(context: CanvasRenderingContext2D) {
        context.fillStyle = '#fff';
        context.fillRect(480, 130, 80, 40);
        context.fillStyle = '#000';
        context.font = "16px '微软雅黑'";
        let playerText = this.currentPlayer === 0 ? '白棋' : '黑棋';
        context.fillText(playerText, 505, 150);
        if (this.gameOver) {
            playerText = this.currentPlayer === 0 ? '黑棋' : '白棋';
            playerText += '胜利！';
            context.fillStyle = '#fff';
            context.fillRect(450, 0, 150, 200);
            context.fillStyle = '#000';
            context.font = "20px '微软雅黑'";
            context.fillText(playerText, 480, 150);
        }
    }

    // 圆角矩形
    fillRoundRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, fillColor?: string | undefined) {
        if (width < 2 * radius) {
            radius = width / 2;
        }
        if (height < 2 * radius) {
            radius = height / 2;
        }
        //圆的直径必然要小于矩形的宽高          
        context.beginPath();
        context.moveTo(x + radius, y);
        context.arcTo(x + width, y, x + width, y + height, radius);
        context.arcTo(x + width, y + height, x, y + height, radius);
        context.arcTo(x, y + height, x, y, radius);
        context.arcTo(x, y, x + width, y, radius);
        context.stroke();
        context.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值  
        context.fill();
    }

    // 判断胜负
    judgeWinner(x: number, y: number, currentPlayer: number, mode: number[]) {
        let count = 0;//计数
        for (let i = 1; i < 5; i++) {//水平往右
            if (this.map[x + i * mode[0]]) {
                if (this.map[x + i * mode[0]][y + i * mode[1]] === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }
        }
        for (let i = 1; i < 5; i++) {//水平往左
            if (this.map[x - i * mode[0]]) {
                if (this.map[x - i * mode[0]][y - i * mode[1]] === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }
        }
        if (count >= 4) {
            this.gameOver = true;
            this.drawGameInfo(this.context!);
        }
    }

    // 下棋事件函数
    play(e: MouseEvent) {
        let px = Math.floor(e.offsetX / 30);
        let py = Math.floor(e.offsetY / 30);
        if (px >= 0 && py >= 0 && px < 15 && py < 15) {
            if (this.map[px][py] === -1 && !this.gameOver) {
                this.currentPlayer = this.step % 2;
                this.drawChess(px, py, this.currentPlayer);
                this.map[px][py] = this.currentPlayer;
                this.judgeWinner(px, py, this.currentPlayer, this.mode[0]);
                this.judgeWinner(px, py, this.currentPlayer, this.mode[1]);
                this.judgeWinner(px, py, this.currentPlayer, this.mode[2]);
                this.judgeWinner(px, py, this.currentPlayer, this.mode[3]);
                this.step++;
            }
        }
        this.restart(e);
    }

    // 重新游戏
    restart(e: MouseEvent) {
        if (e.offsetX >= 470 &&
            e.offsetX <= 580 &&
            e.offsetY >= 300 &&
            e.offsetY <= 340) {
            this.gameOver = false;
            this.initMap();
            this.drawChessboard();
        }
    }

    // 移除事件监听
    dispose() {
        this.dom.removeEventListener('click', this.play);
    }
}