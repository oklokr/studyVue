<template>
  <div class="wrap">
    <header>
      <div class="header-inner">
        <h1 class="logo">
          <a href="/">
            <img src="@/assets/img/logo.png" alt="로고">
          </a>
        </h1>
      </div>
    </header>
    <main>
      <section class="banner">
        <div class="main-banner-wrap">
          <div class="img-wrapper">
            <img src="@/assets/img/KakaoTalk_20210310_170241382.png" alt="케릭터 이미지">
          </div>
          <div class="text-btn-wrap">
            <img src="@/assets/img/text-logo.png" alt="텍스트로고">
            <h2>"저와 함께 식사하실래요?"</h2>
            <router-link to="/MbtiTest">MBTI 성향검사하기</router-link>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="content-inner">
          <div class="introduction-inner">
            
            <div class="img-title-wrap">
              <img src="@/assets/img/KakaoTalk_20210310_170241382.png" alt="케릭터 이미지">
              <h2>"내 이름은 김봉팔이야"</h2>
            </div>

            <div class="text-wrap">
              <div>
                <p>할아버지가 지어준 내 이름은</p>
                <p>겉보기엔 촌스럽지만 귀한 뜻을 갖고 있어</p>
                <p>예쁠 봉, 옥소리 팔</p>
              </div>
              <div>
                <p>어때 예쁘지?</p>
                <p>대학교 2학년에 카페알바로 열심히 살지만</p>
              </div>
              <div>
                <p>자취경력 5년차!</p>
                <p>라면을 끓여도 나만의 비법이 있고</p>
                <p>맛집은 내 전문이지!</p>
              </div>
              <div>
                <p>혹시 내소식이 궁굼하니?</p>
                <p>좋아~ 이번만 특별히 가르쳐주지!</p>
              </div>
            </div>
          </div>

          <div class='youtube-content-wrap'>
            <div class='title-wrap'>
              <div class="youtube-link-btn">
                <button>유튜브 채널 보러가기</button>
              </div>
                <div class="sns-link-btn-warp">
                  <!-- 페이스북 공유 버튼 -->
                  <a href="javascript:void(0)" @click="facebook()">
                    <img src="@/assets/img/icon/face.png" title="페이스북으로 공유하기" class="sharebtn_custom" style="width: 32px;">
                  </a>
                  <!-- 트위터 공유 버튼 -->
                  <a href="javascript:void(0)" @click="twitter()">
                    <img src="@/assets/img/icon/twt.png" title="트위터로 공유하기" class="sharebtn_custom" style="width: 32px;">
                  </a>
                  <!-- 카카오 스토리 공유 버튼 -->
                  <a href="javascript:void(0)" @click="kakaoStory()">
                    <img src="@/assets/img/icon/kakao.png" title="카카오스토리로 공유하기" class="sharebtn_custom" style="width: 32px;">
                  </a>
                   <!-- 네이버 공유 버튼 --> 
                  <a href="javascript:void(0)" @click="naver()">
                    <img src="@/assets/img/icon/band.png" title="네이버로 공유하기" class="sharebtn_custom" style="width: 32px;">
                  </a>
                  <!-- 밴드 공유 버튼 --> 
                  <a href="javascript:void(0)" @click="naverBand()">
                    <img src="@/assets/img/icon/naver.png" title="밴드로 공유하기" class="sharebtn_custom" style="width: 32px;">
                  </a>
                </div>
            </div>

            <div class="video-container">
                <iframe width="440" height="315" src="https://www.youtube.com/embed/HSN44ttUYBU" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer>
      <div class="footer-inner">
        <div class="ft-top-wrap">
          <div class="ft-top-first">
            <p>Copyright2001 CUMEDIAGROUP</p>
            <p>모든 권리 보유.</p>
          </div>
          <div class="ft-top-second">
            <ul>
              <li><a href="javascript:void(0)">개인 정보 처리방침</a></li>
              <li><a href="javascript:void(0)">웹 사이트 이용 약관</a></li>
            </ul>
          </div>
        </div>
        <div class="ft-bottom-wrap">
          <div>
            <p>(주) 씨유미디어그룹</p>
            <p>사업자등록번호 : 198-88-00246</p>
            <p>고객지원 : 문의 게시판 또는 02-2088-7388</p>
            <p>대표이사 : 김창호 서울 양천구 목동동로233-1, 10층 1019호, 1020호, 1021호</p>
            <p>이메일 : marketing@cumediagroup.co.kr</p>
            <p>(운영시간 9:30 ~ 17:00 점심: 12:00 ~ 13:00, 주말/공휴일은 제외)</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        url_default_ks : "https://story.kakao.com/share?url=",
        url_default_fb : "https://www.facebook.com/sharer/sharer.php?u=",
        url_default_tw_txt : "https://twitter.com/intent/tweet?text=",
        url_default_tw_url : "&url=",
        url_default_band : "http://band.us/plugin/share?body=",
        url_route_band : "&route=",
        url_default_naver : "http://share.naver.com/web/shareView.nhn?url=",
        title_default_naver : "&title=",
      }
    },
    methods: {
      facebook(){
        console.log(location.href);
        const url_this_page = location.href;
        const url_combine_fb = this.url_default_fb + url_this_page;
        window.open(url_combine_fb, '', 'scrollbars=no, width=600, height=600');
        return false;
      },
      twitter(){
        const url_this_page = location.href;
        const url_combine_tw = this.url_default_tw_txt + document.title + this.url_default_tw_url + url_this_page;
        window.open(url_combine_tw, '', 'scrollbars=no, width=600, height=600');
        return false;
      },
      kakaoStory(){
        const url_this_page = location.href;
        const url_combine_ks = this.url_default_ks + url_this_page;
        window.open(url_combine_ks, '', 'scrollbars=no, width=600, height=600');
        return false;
      },
      naver(){
        const url_this_page = location.href;
        const title_this_page = document.title;
        const url_combine_naver = this.url_default_naver + encodeURI(url_this_page) + this.title_default_naver + encodeURI(title_this_page);
        window.open(url_combine_naver, '', 'scrollbars=no, width=600, height=600');
        return false;
      },
      naverBand(){
        const url_this_page = location.href;
        const title_this_page = document.title;
        const url_combine_band = this.url_default_band + encodeURI(url_this_page)+ '%0A' + encodeURI(title_this_page)+'%0A' + '&route=tistory.com';
        window.open(url_combine_band, '', 'scrollbars=no, width=584, height=635');
        return false;
      }
    }
}
</script>

<style scoped lang="scss">
  @import "@/assets/css/home.scss"
</style>