<template>
    <div class="box">
        <canvas class="chessboard" ref="chessboard" width="450" height="450">当前浏览器不支持canvas，请更换浏览器使用！</canvas>
        <div>asd</div>
        <div>dasdsfa</div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'

// const chessboard =  ref(null);

// onMounted(()=> {
//     console.log(chessboard)
// })

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
        background: #fff;
        box-shadow: 5px 5px 5px #b9b9b9, -2px -2px 2px #f3f3f3;
    }
}
</style>