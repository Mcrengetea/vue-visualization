<template>
    <div class="box" id="page">
        <div class="cards">
            <h3>Movies</h3>
            <h1>Popular</h1>
            <div class="card princess-mononoke">
                <div class="card-bg"></div>
                <img class="card-img" src="/image/3dr_mono.png" />
                <div class="card-text">
                    <p class="card-title">Princess Mononoke</p>
                </div>
            </div>
            <div class="card spirited-away">
                <div class="card-bg"></div>
                <img class="card-img" src="/image/3dr_chihiro.png" />
                <div class="card-text">
                    <p class="card-title">Spirited Away</p>
                </div>
            </div>
            <div class="card howl-s-moving-castle">
                <div class="card-bg"></div>
                <img class="card-img" src="/image/3dr_howlcastle.png" />
                <div class="card-text">
                    <p class="card-title">Howl's Moving Castle</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'

// 初始化变量
let page: HTMLElement | null = null;
let cards: HTMLElement | null = null;
let images: HTMLElement[];
let backgrounds: HTMLElement[];
// 旋转角度系数
let range: number = 40;
// 动画帧ID
let timeout: number | undefined = undefined;

// 旋转公式（返回-20 ~ 20，保留1为小数）
function calcRotate(a: number, b: number): number {
    return +(a / b * range - range / 2).toFixed(1);
}

// 视差动画函数
function parallax(e: MouseEvent) {
    let x = e.x;
    let y = e.y;

    // 如果 timeout 已经存在，就取消一个先前通过调用 window.requestAnimationFrame() 方法添加到计划中的动画帧请求。
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    // 在下次重绘之前调用指定的回调函数更新动画
    timeout = window.requestAnimationFrame(function () {
        // 通过 calcRotate 根据鼠标当前位置和容器宽高比计算得出的值
        let xValue = calcRotate(x, window.innerWidth);
        let yValue = calcRotate(y, window.innerHeight);

        // 设置卡片容器的旋转角度
        cards!.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        // 设置所有图片的位移
        images!.forEach(item => item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`);
        // 设置所有背景图的位置
        backgrounds.forEach(item => item.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`);
    });
}

onMounted(() => {
    // 获取dom元素
    page = document.querySelector('#page');
    cards = document.querySelector('.cards');
    images = Array.from(document.querySelectorAll('.card-img'));
    backgrounds = Array.from(document.querySelectorAll('.card-bg'));

    // 绑定事件
    page!.addEventListener('mousemove', parallax);
});

onUnmounted(() => {
    // 移除事件
    page!.removeEventListener('mousemove', parallax);
});
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    perspective: 1800px;
    background: linear-gradient(to bottom, #CCFF99, #99CCFF);
    border-radius: 4px;

    .cards {
        display: inline-block;
        min-width: 595px;
        padding: 30px 35px;
        perspective: 1800px;
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        border-radius: 15px;
        text-align: left;
        background: #fff;
        box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);

        h1 {
            margin-bottom: 30px;
            transform: translateZ(35px);
            letter-spacing: -1px;
            font-size: 32px;
            font-weight: 800;
            color: #3e3e42;
        }

        h3 {
            margin-bottom: 6px;
            transform: translateZ(25px);
            font-size: 16px;
            color: #eb285d;
        }

        .card {
            display: inline-block;
            width: 175px;
            height: 250px;
            position: relative;
            overflow: hidden;
            perspective: 1200px;
            transform-style: preserve-3d;
            transform: translatez(35px);
            transition: transform 200ms ease-out;
            text-align: center;
            border-radius: 15px;
            box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.6);
        }

        .card:not(:last-child) {
            margin-right: 30px;
        }

        .card-img {
            position: relative;
            height: 100%;
        }

        .card-bg {
            bottom: -50px;
            left: -50px;
            position: absolute;
            right: -50px;
            top: -50px;
            transform-origin: 50% 50%;
            transform: translateZ(-50px);
            z-index: 0;
        }

        .princess-mononoke .card-img {
            top: 14px;
            right: -10px;
            height: 110%;
        }

        .princess-mononoke .card-bg {
            background: url("/image/3dr_monobg.jpg") center/cover no-repeat;
        }

        .spirited-away .card-img {
            top: 25px;
        }

        .spirited-away .card-bg {
            background: url("/image/3dr_spirited.jpg") center/cover no-repeat;
        }

        .howl-s-moving-castle .card-img {
            top: 5px;
            left: -4px;
            height: 110%;
        }

        .howl-s-moving-castle .card-bg {
            background: url("/image/3dr_howlbg.jpg") center/cover no-repeat;
        }

        .card-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70px;
            position: absolute;
            z-index: 2;
            bottom: 0;
            background: linear-gradient(to bottom,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.55) 100%);
        }

        .card-title {
            margin-bottom: 3px;
            padding: 0 10px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
        }
    }


}
</style>