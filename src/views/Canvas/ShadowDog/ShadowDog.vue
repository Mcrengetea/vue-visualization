<template>
    <canvas id="canvas1"></canvas>
    <img src="@/assets/image/shadowDog/player.png" alt="" id="player">
    <img src="@/assets/image/shadowDog/layer-1.png" alt="" id="layer1">
    <img src="@/assets/image/shadowDog/layer-2.png" alt="" id="layer2">
    <img src="@/assets/image/shadowDog/layer-3.png" alt="" id="layer3">
    <img src="@/assets/image/shadowDog/layer-4.png" alt="" id="layer4">
    <img src="@/assets/image/shadowDog/layer-5.png" alt="" id="layer5">
    <img src="@/assets/image/shadowDog/enemy_fly.png" alt="" id="enemy_fly">
    <img src="@/assets/image/shadowDog/enemy_plant.png" alt="" id="enemy_plant">
    <img src="@/assets/image/shadowDog/enemy_spider_big.png" alt="" id="enemy_spider_big">
    <img src="@/assets/image/shadowDog/fire.png" alt="" id="fire">
    <img src="@/assets/image/shadowDog/boom.png" alt="" id="collisionAnimation">
    <img src="@/assets/image/shadowDog/heart.png" alt="" id="lives">
</template>

<script setup lang='ts'>
import Game from '@/utils/canvas/ShadowDog/game';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
    nextTick(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement
        const ctx = canvas.getContext('2d')
        canvas.width = 900
        canvas.height = 500
        const game = new Game(canvas.width, canvas.height)
        let lastTime = 0

        function animate(timeStamp: number) {
            const deltaTime = timeStamp - lastTime
            lastTime = timeStamp
            ctx!.clearRect(0, 0, canvas.width, canvas.height)
            game.update(deltaTime)
            game.draw(ctx!)
            if (!game.gameOver) requestAnimationFrame(animate)
        }
        animate(0)
    })
})
</script>

<style lang="scss" scoped>
#canvas1 {
    border: 5px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    font-family: 'Creepster', cursive;
}

#player,
#layer1,
#layer2,
#layer3,
#layer4,
#layer5,
#enemy_fly,
#enemy_plant,
#enemy_spider_big,
#fire,
#collisionAnimation,
#lives {
    display: none;
}
</style>