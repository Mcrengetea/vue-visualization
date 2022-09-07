<template>
    <div class="box">
        <canvas class="chessboard" ref="chessboard" width="600" height="450">当前浏览器不支持canvas，请更换浏览器使用！</canvas>
    </div>
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Game } from '@/utils/canvas/gobang/Game';

const chessboard = ref<HTMLCanvasElement>();
let game: Game | null = null;

onMounted(() => {
    game = new Game(chessboard.value!);
    game.init();
});

onBeforeUnmount(() => {
    game!.dispose();
    game=null;
});
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .chessboard {
        background: #F4D082;
        box-shadow: 5px 5px 5px #b9b9b9, -2px -2px 2px #f3f3f3;
    }
}
</style>