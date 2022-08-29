// canvas
export default {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/Canvas/index.vue'),
    meta: {
        navState: true,
        navName: 'Canvas',
        icon: 'el-icon-cold-drink'
    },
    children: [
        {
            path: 'ShadowDog',
            name: 'ShadowDog',
            component: () => import('@/views/Canvas/ShadowDog/ShadowDog.vue'),
            meta: {
                navState: true,
                navName: 'ShadowDog',
                icon: 'el-icon-s-shop'
            }
        }
    ]
}