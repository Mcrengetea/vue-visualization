import AppMain from '../layout/AppMain.vue';

// Native
export default {
    path: '/native',
    name: 'Native',
    component: AppMain,
    meta: { title: '原生', icon: 'Watermelon' },
    children: [
        {
            path: 'PureCSS',
            name: 'PureCSS',
            // component: AppMain,
            meta: { title: '纯CSS', icon: 'Ship' },
            children: [
                {
                    path: 'CubicWord',
                    name: 'CubicWord',
                    component: () => import('@/views/Native/PureCSS/CubicWord.vue'),
                    meta: { title: '立体文字', icon: 'Box' }
                },
                {
                    path: 'Clock',
                    name: 'Clock',
                    component: () => import('@/views/Native/PureCSS/Clock.vue'),
                    meta: { title: '时钟', icon: 'AlarmClock' }
                },
                {
                    path: 'DensePaving',
                    name: 'DensePaving',
                    component: () => import('@/views/Native/PureCSS/DensePaving.vue'),
                    meta: { title: '密铺图案', icon: 'KnifeFork' }
                },
                {
                    path: 'Sticker',
                    name: 'Sticker',
                    component: () => import('@/views/Native/PureCSS/Sticker.vue'),
                    meta: { title: '便利贴', icon: 'PriceTag' }
                },
                {
                    path: 'FilmAnimation',
                    name: 'FilmAnimation',
                    component: () => import('@/views/Native/PureCSS/FilmAnimation.vue'),
                    meta: { title: '电影动画', icon: 'MagicStick' }
                },
            ]
        },
        {
            path: 'parallax',
            name: 'Parallax',
            component: () => import('@/views/Native/Parallax/Parallax.vue'),
            meta: { title: '视差图', icon: 'Pear' }
        }
    ]
}