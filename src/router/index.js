import { createRouter, createWebHistory } from 'vue-router'
import Auth404 from '../views/Auth404.vue'
import Dashboard from '../views/Dashboard.vue'
import PageSearch from '../views/PageSearch.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/auth-404',
            name: 'Auth404',
            component: Auth404
        },
        {
            path: '/search',
            name: 'PageSearch',
            component: PageSearch
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
