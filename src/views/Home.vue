<template>
  <main id="main">
    <div class="left-stick">
      <div class="item"></div>
    </div>
    <div class="dim"></div>

    <section class="fullpage">
      <div class="area1-wrap">
        
        <div class="video-wrap">
          <video autoplay muted loop preload="auto" playsinline>
            <source src="https://www.cumediagroup.co.kr/wp-content/uploads/2021/01/mainvideo.mp4" type="video/mp4">
          </video>
        </div>

        <div class="area1-content">

          <div class="top-content">

            <div class="icon-text-wrap">

              <div class="it-icon-wrap">
                <img src="@/assets/img/cuwhite.png" alt="" class="front-img">
                <img src="@/assets/img/cuwhite.png" alt="" class="back-img">
              </div>

              <div class="it-text-wrap">
                <p>영상제작 / 디지털마케팅</p>
                <p>브랜드마케팅</p>
              </div>

            </div>

            <div class="text-wrap">
              <p>MEDIA GROUP</p>
            </div>
          </div>

          <div class="mid-content">
            <div class="text-wrap">
              <p>재미와 공익을 동시에 충족시키는 씨유미디어 그룹의 실험적 기획은 공중파 프로그램</p>
              <p>제작에서 이미 독보적인 영역을 개척하고 한발 더 나아가 차별화된 다큐멘터리와</p>
              <p>기업의 전문적인 홍보영상, 디지털영상, 웹사이트 등을제작하고 있습니다.</p>
            </div>
          </div>

          <div class="bottom-content">
            <div class="btn-wrap">
              <button>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="fullpage"></section>
  </main>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      activeMenuDim: false,
      activeNav: 0,
      activeAlbum: 0,
      scdir: "",
      state: false,
      prev: true,
      next: false,
      lodingReadyState: false,
      digit: true,
      albumCrntNumber: 0,
      albumCrntLength: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.left-stick').remove();
      setTimeout(() => { document.querySelector('.dim').remove(); }, 2000)
    }, 2000)
  },
  watch: {
  },
  computed: {
  },
  methods: {
  },
}

</script>

<style  lang="scss">
  @import "@/assets/css/home.scss";
</style>