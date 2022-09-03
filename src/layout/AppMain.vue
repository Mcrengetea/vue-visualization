<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <el-card class="box-card" :body-style="cardBody">
                <template #header>
                    <div class="card-header">
                        <span>{{ title }}</span>
                    </div>
                </template>
                <component :is="Component" />
            </el-card>
        </transition>
    </router-view>
</template>

<script setup lang='ts'>
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const title = computed(() => route.meta.title);

const cardBody = reactive({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden'
});
</script>

<style lang="scss" scoped>
.box-card {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    .card-header>span {
        color:#fff;
        font-weight: 900;
    }
}
</style>