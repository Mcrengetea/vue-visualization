import AppMain from '../layout/AppMain.vue';

// pureCSS
export default {
    path: '/pureCSS',
    name: 'PureCSS',
    component: AppMain,
    meta: { title: '纯CSS', icon: 'DataLine' },
    children: [
        {
            path: 'parallax',
            name: 'Parallax',
            component: () => import('@/views/PureCSS/Parallax/Parallax.vue'),
            meta: { title: '视差图', icon: 'DataLine' }
        }
    ]
}