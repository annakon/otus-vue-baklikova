import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/add',
            name: 'add',
            component: () => import('../components/newGoods.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('../components/orderForm.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../components/newGoods.vue')
        },
    ],
    scrollBehavior() {
        return {top: 0, left: 0}
    }
})

export default router
