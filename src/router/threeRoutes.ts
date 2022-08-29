// three
export default {
    path: '/three',
    name: 'Three',
    component: () => import('@/views/Three/index.vue'),
    meta: {
        navState: true,
        navName: 'Three',
        icon: 'el-icon-cold-drink'
    },
    children: [
        {
            path: 'basic',
            name: 'Basic',
            component: () => import('@/views/Three/Basic/Basic.vue'),
            meta: {
                navState: true,
                navName: '基础',
                icon: 'el-icon-s-shop'
            }
        },
        {
            path: 'panorama',
            name: 'Panorama',
            component: () => import('@/views/Three/Panorama/Panorama.vue'),
            meta: {
                navState: true,
                navName: '全景图',
                icon: 'el-icon-s-shop'
            }
        }
    ]
}