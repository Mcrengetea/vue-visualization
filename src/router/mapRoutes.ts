import AppMain from '../layout/AppMain.vue';

// map
export default {
    path: '/map',
    name: 'Map',
    component: AppMain,
    meta: { title: '高德地图', icon: 'Cherry' },
    children: [
        {
            path: 'basic',
            name: 'MapBasic',
            component: () => import('@/views/Map/Basic/Basic.vue'),
            meta: { title: '基础', icon: 'Orange' }
        },
    ]
}