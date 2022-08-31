import AppMain from '../layout/AppMain.vue';

// echarts
export default {
    path: '/echarts',
    name: 'Echarts',
    component: AppMain,
    meta: { title: 'Echarts', icon: 'DataAnalysis' },
    children: [
        {
            path: 'basic',
            name: 'EchartsBasic',
            component: () => import('@/views/Echarts/Basic/Basic.vue'),
            meta: { title: '基础', icon: 'TrendCharts' }
        },
        {
            path: 'DataTable',
            name: 'DataTable',
            component: () => import('@/views/Echarts/DataTable/DataTable.vue'),
            meta: { title: '数据表格', icon: 'DataLine' },
        }
    ]
}