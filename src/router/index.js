import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Risk from '../views/Risk.vue'
import Cost from '../views/Cost.vue'
import ValueSet from '../views/ValueSet.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [{
        path: '/',
        component: Index,
        children: [{
                path: '/risk',
                component: Risk
            },
            {
                path: '/cost',
                component: Cost
            },
            {
                path: '/valueSet',
                component: ValueSet
            },
        ]

    }]
})
export default router