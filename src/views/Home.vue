<template>
    <main>

      <section class="home-area">
        <div class="home-content-wrap">

          <div class="home-img-wrap">
            <img src="http://aig741.cafe24.com/resource/img/logo/logo.png" alt="로고 이미지" class="home-logo-img">
          </div>
          <div class="home-text-wrap">
            <div class="home-text-title-wrap">
              <p>
                <span class="first-text">SEUNG-JU,&nbsp;</span>
                <span class="second-text">FRONT-END&nbsp;</span>
                <span class="third-text">DEVELOPER</span>
              </p>
            </div>
            <div class="home-text">
              <p>
                나는 나의 손으로 직접 바꾸고 변화하는 것에 흥미를 느껴 
                <span class="bold-style"> 프론트엔지니어</span>
                가 되었습니다.</p>
                <p>모든 한계를 부술 수 있는 
                <span class="bold-style"> 풀스택 개발자</span>
                가 되는 것이 목표입니다.</p>
            </div>
          </div>
          <div class="home-btn-wrap">
            <button type="button" class="view-btn">View Introduce</button>
          </div>
          <div class="home-next-btn">
            <button type="button"></button>
          </div>
        </div>
      </section>
      <section class="about-area"></section>
      <section class="portfolio-area"></section>
      <section class="contactUs-area"></section>
    </main>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        activeIndex: 0,
      }
    },
    methods: {
      
    }
}
</script>

<style scoped lang="scss">
  @import "@/assets/css/home.scss";
</style>