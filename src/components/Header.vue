<template>
    <header id="header" class="header no-scroll">

        <nav class="nav-bar">
            <div class="logo-wrap">
                <h1 class="logo">
                    <a href="/">
                        <img src="http://aig741.cafe24.com//resource/img/logo/logo.png" alt="로고 이미지">
                    </a>
                </h1>
            </div>

            <div class="nav">
                <ul>
                   <li v-for="(value, index) in navText" :key="value+index">
                        <a
                            href="javascript:void(0)"
                            v-bind:class="{active:activeIndex==index}"
                            v-on:click="activeIndex=index"
                        >{{value}}</a>
                   </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navText : ["Home", "About", "Portfolio", "Contact us"],
            activeIndex : 0,
        }
    },
    methods: {
    },
    mounted: () => {

        document.querySelector('#header').style.top = document.querySelector(".home-area").offsetHeight+'px';

        function handleResize(){
            let height = document.querySelector(".home-area").offsetHeight+'px';
            document.querySelector('#header').style.top = height;
        }

        window.addEventListener('resize', handleResize);
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/header.scss';
</style>