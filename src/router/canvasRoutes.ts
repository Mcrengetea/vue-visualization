import AppMain from '../layout/AppMain.vue';

// canvas
export default {
    path: '/canvas',
    name: 'Canvas',
    component: AppMain,
    meta: { title: 'Canvas', icon: 'Sugar' },
    children: [
        {
            path: 'ShadowDog',
            name: 'ShadowDog',
            component: () => import('@/views/Canvas/ShadowDog/ShadowDog.vue'),
            meta: { title: 'ShadowDog', icon: 'Grape' },
        }
    ]
}