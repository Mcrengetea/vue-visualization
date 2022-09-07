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
            component: () => import('../views/Map/Basic/Basic.vue'),
            meta: { title: '基础', icon: 'Orange' }
        },
        {
            path: '3DMap',
            name: '3DMap',
            component: () => import('../views/Map/3DMap/3DMap.vue'),
            meta: { title: '3D地图', icon: 'Place' }
        },
        {
            path: 'SatelliteMap',
            name: 'SatelliteMap',
            component: () => import('../views/Map/SatelliteMap/SatelliteMap.vue'),
            meta: { title: '卫星地图', icon: 'Guide' }
        }
    ]
}