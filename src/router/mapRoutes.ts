// map
export default {
    path: '/map',
    name: 'Map',
    component: () => import('@/views/Map/index.vue'),
    meta: {
        navState: true,
        navName: '高德地图',
        icon: 'el-icon-cold-drink'
    },
    children: [
        {
            path: 'basic',
            name: 'Basic',
            component: () => import('@/views/Map/Basic/Basic.vue'),
            meta: {
                navState: true,
                navName: '基础',
                icon: 'el-icon-s-shop'
            }
        }
    ]
}