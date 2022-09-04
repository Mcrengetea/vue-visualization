<template>
    <div ref="amap" class="amap-view"></div>
</template>

<script setup lang='ts'>
import { ref, onBeforeUnmount, onMounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

//#region 高德地图
const amap = ref<HTMLElement>();
let map: any = null;

function loadMap() {
    AMapLoader.load({
        key: "c64d5a62b22276dec20e35c78e83790a",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale", "AMap.ToolBar"],       // 需要使用的的插件列表
    }).then(AMap => {
        initMap(AMap);
    }).catch(e => {
        console.log(e);
    });
}

// 初始化地图参数
const initMap = (AMap) => {
    map = new AMap.Map(amap.value!, {
        viewMode: "3D",
        terrain: true,
        resizeEnable: true /* 城市定位 */,
        zooms: [1, 18],
        zoom: 14
    });
    // 比例尺
    map.addControl(new AMap.Scale());
    // 工具条
    map.addControl(new AMap.ToolBar());
}

onMounted(() => {
    // 加载地图
    loadMap();
});

onBeforeUnmount(() => {
    // 销毁地图
    map && map.destroy();
    map = null;
});
//#endregion
</script>

<style lang="scss" scoped>
.amap-view {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
}
</style>