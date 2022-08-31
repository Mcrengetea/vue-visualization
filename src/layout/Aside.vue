<template>
    <el-aside :width="isCollapse ? `64px` : `200px`">
        <el-menu router :collapse="isCollapse" :default-active="currentPath">
            <TreeMenu :routesList="routesList" />
        </el-menu>
        <div class="btn" @click="changeCollapse">

        </div>
    </el-aside>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TreeMenu from './TreeMenu.vue';

//#region 路由列表
const router = useRouter();
const route = useRoute();

// 路由列表规则
function filtterRoutes(routes: any, path = '') {
    let result = [];
    for (let index in routes) {
        // 排除404，排除没有meta的路由，排除hidden为true的路由
        if (
            routes[index].name !== 'NotFound' &&
            routes[index].meta && 
            routes[index].hidden !== true
        ) {
            // 重新子路由的path
            routes[index].path = path + routes[index].path

            // 出现children就递归
            if ('children' in routes[index] && routes[index].children.length > 0) {
                // 开始递归，并传入父级的path进行下一轮拼接
                const children = filtterRoutes(routes[index].children, routes[index].path+'/');
                // 结构路由参数
                const currentRoutes = { ...routes[index] };
                // 重整children数据，将递归回来有用的子级数据替换掉原数据
                currentRoutes.children = children;
                result.push(currentRoutes);
            } else {
                // 没有子级路由的就直接push进队列
                result.push(routes[index]);
            }
        }
    }
    return result;
}

// 按照指定规则获取路由列表
const routesList = computed(() => {
    return filtterRoutes(router.options.routes);
})

// 当前路由地址
const currentPath = computed(() => {
  return route.path;
})
//#endregion

//#region 导航栏
let isCollapse = ref(false);

// 控制导航栏伸展
const changeCollapse = () => {
    isCollapse.value = !isCollapse.value;
};
//#endregion
</script>

<style lang="scss" scoped>
.aside {
    background-color: #d49311;
}

.btn {
    width: 50px;
    height: 50px;
    background-color: rgb(60, 247, 8);
}
</style>