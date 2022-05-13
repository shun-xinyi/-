import {createRouter, createWebHistory} from 'vue-router'
import menu from '@/components/menuAll'

export const routes = [
    {
        path: '',
        name: 'menu',
        component: menu,
        children: [
            {
                path: 'home',
                name: 'home',
                meta:{
                    title: '首页'
                },
                component: () => import( '@/views/HomeView.vue'),
            },
            {
                path: 'about',
                name: 'about',
                meta:{
                    title: '关于'
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
            },
            {
                path: 'table',
                name: 'table',
                meta:{
                    title: '表格'
                },
                component: () => import('@/views/table')
            },
            {
                path: 'test',
                name: 'testTable',
                meta:{
                    title: '测试表格'
                },
                component: () => import('@/views/testTable')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            title: '登录'
        },
        component: () => import('@/views/userLogin')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
