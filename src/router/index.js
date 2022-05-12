import {createRouter, createWebHistory} from 'vue-router'
import menu from '@/components/menuAll'

const routes = [
    {
        path: '',
        name: 'menu',
        component: menu,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import( '@/views/HomeView.vue')
            },
            {
                path: 'about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
            },
            {
                path: 'table',
                name: 'table',
                component: () => import('@/views/table')
            },
            {
                path: 'test',
                name: 'testTable',
                component: () => import('@/views/testTable')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/userLogin')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
