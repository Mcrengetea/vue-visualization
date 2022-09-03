<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Engine } from '@/utils/three/Engine';
import { basicObjectList } from '@/utils/three/BasicObject';
import { lightList } from '@/utils/three/Light';
import { helperList } from '@/utils/three/Helper';
import elementResizeDetectorMaker from 'element-resize-detector';

// 获取引擎渲染节点
const threeTarget = ref<HTMLElement>();
let engine: null | Engine = null;

onMounted(() => {
  // 初始化渲染引擎
  engine = new Engine(threeTarget.value!);
  // 导入基础模型
  engine.addObject(...basicObjectList);
  // 导入光源
  engine.addObject(...lightList);
  // 导入辅助对象
  engine.addObject(...helperList);
  // 初始化监听对象
  const erd = elementResizeDetectorMaker();
  // 监听元素宽高并重置相机
  erd.listenTo(threeTarget.value!, () => engine!.resize())
});

onBeforeUnmount(() => {
  // 销毁引擎实例
  engine = null;
});
</script>

<style lang="scss" scoped>
.three-canvas {
  width: 100%;
  height: 100%;
}
</style>