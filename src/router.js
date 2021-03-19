import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue"
import MbtiTest from "./views/MbtiTest.vue"
import resultMbti from "./views/resultMbti.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/MbtiTest", component: MbtiTest },
        { path: "/resultMbti", component: resultMbti },
    ]
})

export default router;