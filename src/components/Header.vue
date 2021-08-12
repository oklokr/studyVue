<template>
    <header id="header" class="header">
        <div class="nav-wrap">
            <div class="nav-bar">
                <h1 class="logo">
                    <a href="/">
                    <img src="http://cumediagroup.mycafe24.com/wp-content/uploads/2021/01/cuwhite.png" alt="로고" width="74px">
                    </a>
                </h1>
                <div class="gnb-wrap">
                    <ul>
                        <li v-for="item in navText" :key="item">
                            <router-link to="/About">{{item}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navText: ["ABOUT", "BROADCAST", "SERVICE", "CONTACT"]
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/header.scss';
</style>