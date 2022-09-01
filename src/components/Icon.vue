<template>
    <el-icon :color="color">
        <component :is="name"></component>
    </el-icon>
</template>

<script setup lang='ts'>
defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String
    }
});
</script>

<style lang="scss" scoped>
</style>