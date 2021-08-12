import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import resultMbti from "./views/resultMbti.vue"
import Home1 from "./views/Home1.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/About", component: About },
        { path: "/resultMbti", component: resultMbti },
        { path: "/Home1", component: Home1 },
    ]
})

export default router;