<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { Engine } from '@/utils/three/Engine';
import { basicObjectList } from '@/utils/three/BasicObject';
import { lightList } from '@/utils/three/Light';
import { helperList } from '@/utils/three/Helper';

// 获取引擎渲染节点
const threeTarget = ref(null);

onMounted(() => {
  // 初始化渲染引擎
  const engine = new Engine(threeTarget.value!);
  // 导入基础模型
  engine.addObject(...basicObjectList);
  // 导入光源
  engine.addObject(...lightList);
  // 导入辅助对象
  engine.addObject(...helperList);
})

</script>

<style lang="scss" scoped>
.three-canvas {
  width: 100%;
  height: 100%;
}
</style>