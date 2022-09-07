import AppMain from '../layout/AppMain.vue';

// three
export default {
    path: '/three',
    name: 'Three',
    component: AppMain,
    meta: { title: 'Three', icon: 'Burger' },
    children: [
        {
            path: 'basic',
            name: 'ThreeBasic',
            component: () => import('../views/Three/Basic/Basic.vue'),
            meta: { title: '基础', icon: 'Chicken' }
        },
        {
            path: 'panorama',
            name: 'Panorama',
            component: () => import('../views/Three/Panorama/Panorama.vue'),
            meta: { title: '全景图', icon: 'Bowl' }
        }
    ]
}