<template>
    <template v-for="item in routesList">
        <el-menu-item v-if="!('children' in item)" :index="item.path">
            <Icon :name="item.meta.icon"></Icon>
            <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
        <el-sub-menu v-if="'children' in item" :index="item.path">
            <template #title>
                <Icon :name="item.meta.icon"></Icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <TreeMenu :routesList="item.children" />
        </el-sub-menu>
    </template>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

interface RouteType {
    path: string,
    name: string,
    component: any,
    meta: {
        title: string,
        icon: string
    },
    children: any
}
defineProps({
    routesList: {
        type: Array as PropType<RouteType[]>,
        required: true
    }
});
</script>

<style lang="scss" scoped>
</style>