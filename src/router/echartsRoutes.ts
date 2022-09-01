import AppMain from '../layout/AppMain.vue';

// echarts
export default {
    path: '/echarts',
    name: 'Echarts',
    component: AppMain,
    meta: { title: 'Echarts', icon: 'Lollipop' },
    children: [
        {
            path: 'basic',
            name: 'EchartsBasic',
            component: () => import('@/views/Echarts/Basic/Basic.vue'),
            meta: { title: '基础', icon: 'IceCream' }
        },
        {
            path: 'DataTable',
            name: 'DataTable',
            component: () => import('@/views/Echarts/DataTable/DataTable.vue'),
            meta: { title: '数据表格', icon: 'IceDrink' },
        }
    ]
}