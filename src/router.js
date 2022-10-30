import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("./views/Login.vue")
    },
    {
        path: "/it/user",
        name: "user",
        component: () => import("./views/it/User.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router