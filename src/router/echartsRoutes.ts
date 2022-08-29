// echarts
export default {
    path: '/echarts',
    name: 'Echarts',
    component: () => import('@/views/Echarts/index.vue'),
    meta: {
        navState: true,
        navName: 'Echarts',
        icon: 'el-icon-cold-drink'
    },
    children: [
        {
            path: 'basic',
            name: 'Basic',
            component: () => import('@/views/Echarts/Basic/Basic.vue'),
            meta: {
                navState: true,
                navName: '基础',
                icon: 'el-icon-s-shop'
            }
        },
        {
            path: 'DataTable',
            name: 'DataTable',
            component: () => import('@/views/Echarts/DataTable/DataTable.vue'),
            meta: {
                navState: true,
                navName: '数据表格',
                icon: 'el-icon-s-shop'
            }
        }
    ]
}