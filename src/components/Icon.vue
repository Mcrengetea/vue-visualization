<template>
    <el-icon>
        <component :is="name"></component>
    </el-icon>
</template>

<script setup lang='ts'>
defineProps({
    name: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>
</style>