<template>
    <main id="main" @wheel.stop="_scrollEvent">
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
                <button @click="mainNextBtn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fullpage example-content">

         <div class="right-menu-list-wrap">

          <ul 
            @mouseover.stop = " activeMenuDim = true "
            @mouseleave.stop = " activeMenuDim = false "
            v-bind:class="{active: activeMenuDim}"
          >
            <li v-for="(item, index) in navRightText" :key="item+index" v-bind:class="{active:activeNav===index}">
              <div class="text-wrap"><button v-on:click="[(activeNav = index)]">{{item}}</button></div>
              <div class="menu-icon"></div>
            </li>
          </ul>

        </div>

        <div class="example-success-wrap">

          <div class="img-wrap">

            <div class="album-wrap">

                <transition name="fade">
                  <div class="slide-box box-0" :class="{active: activeNav == 0}" v-show="activeNav === 0">
                    <div class="slide-wrap">
                      <div v-for="(item, index, num) in area2" :key="item + index" class="slide-item" v-bind:class="{active: activeAlbum == num}">
                        <div class="move-text-wrap">
                          <div class="top-text-box">
                            <ul>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                            </ul>
                          </div>
                          <div class="bottom-text-box">
                            <ul>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                            </ul>
                          </div>
                        </div>
                        <img :src="item.imgUrl" alt="" class="album-img">
                        <img src="https://blog.kakaocdn.net/dn/cybO4E/btqwKSSmGpu/PM674YMz2fGwtOJekOy6O1/img.jpg" alt="" class="move-icon">
                      </div>
                    </div>
                  </div>
                </transition>
                  
                <transition name="fade">
                  <div class="slide-box box-1" :class="{active: activeNav == 1}" v-show="activeNav === 1">
                    <div class="slide-wrap">
                      <div v-for="(item, index, num) in area3" :key="item + index" class="slide-item" v-bind:class="{active: activeAlbum == num}">
                        <div class="move-text-wrap">
                          <div class="top-text-box">
                            <ul>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                            </ul>
                          </div>
                          <div class="bottom-text-box">
                            <ul>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                            </ul>
                          </div>
                        </div>
                        <img :src="item.imgUrl" alt="" class="album-img">
                        <img src="https://blog.kakaocdn.net/dn/cybO4E/btqwKSSmGpu/PM674YMz2fGwtOJekOy6O1/img.jpg" alt="" class="move-icon">
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <div class="slide-box box-2" :class="{active: activeNav == 2}" v-show="activeNav === 2">
                    <div class="slide-wrap">
                      <div v-for="(item, index, num) in area4" :key="item + index" class="slide-item" v-bind:class="{active: activeAlbum == num}">
                        <div class="move-text-wrap">
                          <div class="top-text-box">
                            <ul>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                              <li>{{item.text}}</li>
                            </ul>
                          </div>
                          <div class="bottom-text-box">
                            <ul>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                              <li>{{item.date}}</li>
                            </ul>
                          </div>
                        </div>
                        <img :src="item.imgUrl" alt="" class="album-img">
                        <img src="https://blog.kakaocdn.net/dn/cybO4E/btqwKSSmGpu/PM674YMz2fGwtOJekOy6O1/img.jpg" alt="" class="move-icon">
                      </div>
                    </div>
                  </div>
                </transition>
            </div>
            
          </div>

          <div class="controller-wrap">
            <div class="controller-inner">
              <button>←</button>
              <p class="crnt-num"><span v-show="digit">0</span>{{activeAlbum + 1}}</p>
              <div class="gauge-bar"><div class="gauge"></div></div>
              <p class="max-num">{{albumCrntLength}}</p>
              <button>→</button>
            </div>
          </div>
        </div>

        
      </section>
      
    </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      navRightText: ["방송콘텐츠", "브랜드마케팅", "공공기관 홍보"],
      contentTExt: ["BROADCAST", "BRAND MARKETING", "PUBLIC RELATIONS"],
      area2: {
        slide1 : { text: "콜드케이스", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/1.jpg") },
        slide2: { text: "대구 가요대전", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/2.jpg") },
        slide3: { text: "생방송투데이", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/3.jpg") },
        slide4: { text: "말의품격", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/4.jpg") },
        slide5: { text: "sbs스페셜", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/5.jpg") },
        slide6: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/6.jpg") },
        slide7: { text: "힘내라청춘", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/7.jpg") },
        slide8: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/8.jpg") },
        slide9: { text: "동물농장", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/9.jpg") },
        slide10: { text: "정글의 법칙", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/10.jpg") },
        slide11: { text: "그것이 알고싶다", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/11.jpg") },
        slide12: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/12.jpg") },
        slide13: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/13.jpg") },
        slide14: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/14.jpg") },
        slide15: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/15.jpg") },
        slide16: { text: "test", date: "2020.05 ~ 2021.05", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/16.jpg") }
      },
      area3: {
        slide1: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/17.jpg") },
        slide2: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/18.jpg") },
        slide3: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/19.jpg") },
        slide4: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/20.jpg") },
        slide5: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/21.jpg") },
        slide6: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/22.jpg") },
        slide7: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/23.jpg") },
        slide8: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/24.jpg") }
      },
      area4: {
        slide1: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/25.jpg") },
        slide2: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/26.jpg") },
        slide3: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/27.jpg") },
        slide4: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/28.jpg") },
        slide5: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/29.jpg") },
        slide6: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/30.jpg") },
        slide7: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/31.jpg") },
        slide8: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/32.jpg") },
        slide9: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/33.jpg") },
        slide10: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/34.jpg") },
        slide11: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/35.jpg") },
        slide12: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/36.jpg") },
        slide13: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/37.jpg") },
        slide14: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/38.jpg") },
        slide15: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/39.jpg") },
        slide16: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/40.jpg") }
      },
      area5: {
        slide1: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/41.jpg") },
        slide2: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/42.jpg") },
        slide3: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/43.jpg") },
        slide4: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/44.jpg") },
        slide5: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/45.jpg") },
        slide6: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/46.jpg") },
        slide7: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/47.jpg") },
        slide8: { text: "text", textImgUrl: require("@/assets/img/slide-img/1.jpg"), imgUrl: require("@/assets/img/slide-img/48.jpg") }
      },
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
    this.albumCrntLength = document.querySelector('.slide-box.active').firstChild.childNodes.length;
    document.querySelectorAll('.top-text-box').forEach(item => {
      item.firstChild.style.width = ""+(item.firstChild.childNodes.length * (item.firstChild.firstChild.offsetWidth + 30))+"px"
    })

    document.querySelectorAll('.bottom-text-box').forEach(item => {
      item.firstChild.style.width = ""+(item.firstChild.childNodes.length * (item.firstChild.firstChild.offsetWidth + 40))+"px"
    })
    

    setTimeout(() => {
      document.querySelector('.left-stick').remove();
      setTimeout(() => {
        document.querySelector('.dim').remove(); 
        const main = document.getElementById('main');
        main.style.transform = 'translateY(0)';
        document.querySelectorAll('.control-box').forEach(element => { element.style.transform = 'translateY(0)'; });
        document.querySelectorAll('.slide-wrap').forEach(element => { element.style.transform = 'translateY(0)'; });
        this._swipe(main);
        main.addEventListener('wheel', this._scrollY)
        this.lodingReadyState = true;

        setInterval(() => {
          if(this.activeAlbum == (this.albumCrntLength -1)){
            this.activeAlbum = 0;
          }else{
            this.activeAlbum++;
          }

          if(this.activeAlbum > 8) {this.digit = false;}else {this.digit = true}

          console.log(this.digit);
          
        }, 2500)

      }, 2000)
    }, 2000)
    
  },
  watch: {
  },
  computed: {
  },
  methods: {
    
    _scrollEvent(e) {
      if (e.deltaY < 0) { this.scdir = 'down'; }
      if (e.deltaY > 0) { this.scdir = 'up'; }
    },

    _scrollY(obj) {
      let slength, plength, pan;
      const pnls = document.querySelectorAll('.fullpage').length;
      const step = 100;
      const vh = window.innerHeight / 100;
      const vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

      if((this.$el !== undefined && this.$el.id === 'main') || (obj !== undefined && obj.id === 'main')){
        pan = this.$el || obj;
        plength = parseInt(pan.offsetHeight / vh);
      }

      if (pan === undefined) { return }

      plength = plength || parseInt(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace('translateY(', ''));

      if (this.scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }

      if(this.state === false) {
        pan.style.transform = 'translateY(' + slength + 'vh)';
        
        this.state = true;
        setTimeout(() => { this.state = false; }, 1500);
      }

      console.log(this.scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
    },

    _swipe(obj) {
      let swdir, sX, sY, dX, dY;
      const threshold = 100;
      const slack = 50;
      const alT = 500;
      let elT, stT;

      obj.addEventListener('touchstart', (e) => {
        const tchs = e.changedTouches[0];
        swdir = 'none';
        sX = tchs.pageX;
        sY = tchs.pageY;
        stT = new Date().getTime();
      }, false);

      obj.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);

      obj.addEventListener('touchend', (e) => {
        const tchs = e.changedTouches[0];
        dX = tchs.pageX - sX;
        dY = tchs.pageY - sY;
        elT = new Date().getTime() - stT;
        if(elT <= alT) {

          if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
            swdir = (dX < 0) ? 'left' : 'right';
          }else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
            swdir = (dY < 0) ? 'up' : 'down';
          }
          if(obj.id === 'main') {
            if (swdir === 'up') {
              this.scdir = swdir;
              this._scrollY(obj);
            }else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
              this.scdir = swdir;
              this._scrollY(obj);
            }
            e.stopPropagation();
          }
        }
      }, false);
    },

    mainNextBtn() {
      if( this.lodingReadyState === true ) {
        document.querySelector('#main').style.transform = 'translateY(-100vh)';
      }
    },

  },
}

</script>

<style  lang="scss">
  @import "@/assets/css/home.scss";
</style>