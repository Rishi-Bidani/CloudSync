import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/js/requests";

const routes = [
    {
        path: "/",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/Login.vue"),
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        beforeEnter: async (to, from, next) => {
            const auth = await Post.checkLogin();
            if (auth.data) await router.push("/")
            else next()
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
