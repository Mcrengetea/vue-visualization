<template>
    <div class="three-canvas" ref="panorama"></div>
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Engine } from '@/utils/three/Panorama/Engine';
import { objectList } from '@/utils/three/Panorama/object';
import { lightList } from '@/utils/three/Panorama/Light';
import { cakePromise } from '@/utils/three/Panorama/Model';
import elementResizeDetectorMaker from 'element-resize-detector';

// 获取引擎渲染节点
const panorama = ref<HTMLElement>();
let engine: null | Engine = null;
let erd: any = null;

onMounted(() => {
    // 初始化渲染引擎
    engine = new Engine(panorama.value!);
    // 导入基础模型
    engine.addObject(...objectList);
    // 导入光源
	engine.addObject(...lightList);
    cakePromise.then(group=>engine!.addObject(group.scene));
    // 初始化监听对象
    erd = elementResizeDetectorMaker();
    // 监听元素宽高并重置相机
    erd.listenTo(panorama.value!, () => engine!.resize());
});

onBeforeUnmount(() => {
    // 销毁引擎实例
    engine = null;
    // 销毁元素监听器
    erd.uninstall(panorama.value!);
});
</script>

<style lang="scss" scoped>
.three-canvas {
    width: 100%;
    height: 100%;
}
</style>