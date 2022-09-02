import AppMain from '../layout/AppMain.vue';

// Native
export default {
    path: '/native',
    name: 'Native',
    component: AppMain,
    meta: { title: '原生', icon: 'Watermelon' },
    children: [
        {
            path: 'parallax',
            name: 'Parallax',
            component: () => import('@/views/Native/Parallax/Parallax.vue'),
            meta: { title: '视差图', icon: 'Pear' }
        }
    ]
}