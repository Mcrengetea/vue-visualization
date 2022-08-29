// pureCSS
export default {
    path: '/pureCSS',
    name: 'PureCSS',
    component: () => import('@/views/PureCSS/index.vue'),
    meta: {
        navState: true,
        navName: '纯CSS',
        icon: 'el-icon-cold-drink'
    },
    children: [
        {
            path: 'parallax',
            name: 'Parallax',
            component: () => import('@/views/PureCSS/Parallax/PureCSS.vue'),
            meta: {
                navState: true,
                navName: '视差图',
                icon: 'el-icon-s-shop'
            }
        }
    ]
}