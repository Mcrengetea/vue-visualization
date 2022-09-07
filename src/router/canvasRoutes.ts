import AppMain from '../layout/AppMain.vue';

// canvas
export default {
    path: '/canvas',
    name: 'Canvas',
    component: AppMain,
    meta: { title: 'Canvas', icon: 'Sugar' },
    children: [
        {
            path: 'Gobang',
            name: 'Gobang',
            component: () => import('../views/Canvas/Gobang/Gobang.vue'),
            meta: { title: '五子棋', icon: 'Grape' },
        },
        {
            path: 'ShadowDog',
            name: 'ShadowDog',
            component: () => import('../views/Canvas/ShadowDog/ShadowDog.vue'),
            meta: { title: 'ShadowDog', icon: 'SwitchFilled' },
        }
    ]
}