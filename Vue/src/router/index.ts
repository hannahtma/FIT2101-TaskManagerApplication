import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/addtask',
            name: 'addtask',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/addTask.vue')
        },

        {
            path: '/sprintboard',
            name: 'sprintboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/SprintBoard.vue')
        },
        {
            path: '/app',
            name: 'app',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../App.vue')
        },
        {
            path: '/productbacklog',
            name: 'productbacklog',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ProductBacklog.vue'),
        },
        // {
        //   path: '/productbacklog/:id',
        //   name: 'productbacklog/:id',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/ProductBacklog.vue'),
        //   props:true
        // },

        {
            path: '/home',
            name: 'home',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Home.vue')
        },
        {
            path: '/teamboard',
            name: 'teamboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/TeamBoard.vue'),
        },
        {
            path: '/sprintbacklog',
            name: 'sprintbacklog',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/SprintBacklog.vue'),
        },
    ]
})

export default router
