import Home from '@/views/Home/Home.vue'
import pureCSSRoutes from './pureCSSRoutes'
import canvasRoutes from './canvasRoutes'
import echartsRoutes from './echartsRoutes'
import mapRoutes from './mapRoutes'
import threeRoutes from './threeRoutes'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  pureCSSRoutes,
  canvasRoutes,
  echartsRoutes,
  mapRoutes,
  threeRoutes,
  { // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound.vue'),
    hidden: true
  }
]