<template>
  <div class="wrap">
    <div class="logo">
      <router-link to="/"><img src="@/assets/img/text-logo.png" alt="텍스트 로고"></router-link>
    </div>
    <div class="result-mbti-content">
      <div class="title-wrap">
        <p class="result-sub-title">{{resultSubTitle}}</p>
        <h2 class="result-title">{{resultTitle}}</h2>
      </div>
      <div class="img-wrap">
        <img src="" alt="음식 이비지">
      </div>
      <div class="text-wrap">
        <div class="percent-text-wrap">
          <p>희귀성 : <span class="percent-text">{{resultPercent}}%</span></p>
        </div>
        <div class="result-text-wrap">
          <p class="result-text">{{resultText}}</p>
        </div>
      </div>
    </div>
    <div class="result-good-bad-content">
      <div class="result-good-warp">
        <p class="title-text">같이 먹으면 좋은사람.</p>
        <img src="" alt="음식 사진">
        <p class="result-good-mbti-text">{{resultGoodMbti}}</p>
        <p class="result-good-text">{{resultGoodTitle}}</p>
      </div>
      <div class="result-bad-warp">
        <p class="title-text">같이 먹으면 좋은사람.</p>
        <img src="" alt="음식 사진">
        <p class="result-bad-mbti-text">{{resultBadMbti}}</p>
        <p class="result-bad-text">{{resultBadTitle}}</p>
      </div>
    </div>
    
    <div class="btn-wrap">
      <router-link to="/MbtiTest" class="re-test-btn">테스트 다시하기</router-link>
    </div>

    <div class="result-link-wrap">
      <h2>결과 공유하기</h2>

      <div class="sns-link-btn-warp">
        <!-- 페이스북 공유 버튼 -->
        <a href="javascript:void(0)" @click="facebook()">
          <img src="@/assets/img/icon/face.png" title="페이스북으로 공유하기" class="sharebtn_custom">
        </a>
        <!-- 트위터 공유 버튼 -->
        <a href="javascript:void(0)" @click="twitter()">
          <img src="@/assets/img/icon/twt.png" title="트위터로 공유하기" class="sharebtn_custom">
        </a>
        <!-- 카카오 스토리 공유 버튼 -->
        <a href="javascript:void(0)" @click="kakaoStory()">
          <img src="@/assets/img/icon/kakao.png" title="카카오스토리로 공유하기" class="sharebtn_custom">
        </a>
          <!-- 네이버 공유 버튼 --> 
        <a href="javascript:void(0)" @click="naver()">
          <img src="@/assets/img/icon/band.png" title="네이버로 공유하기" class="sharebtn_custom">
        </a>
        <!-- 밴드 공유 버튼 --> 
        <a href="javascript:void(0)" @click="naverBand()">
          <img src="@/assets/img/icon/naver.png" title="밴드로 공유하기" class="sharebtn_custom">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultMbti",
  data() {
    return {
      mbti : this.$route.query.mbti,
      resultTitle : "",
      resultSubTitle : "",
      resultFoodImg : "",
      resultPercent : "",
      resultText : "",
      resultGoodMbti : "",
      resultGoodFood : "",
      resultGoodTitle : "",
      resultBadMbti : "",
      resultBadFood : "",
      resultBadTitle : "",
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
  mounted(){
    const mbti = this.mbti;
    switch (mbti) {
      case "ISTJ":
        this.resultTitle = "고추장 찌개";
        this.resultSubTitle = "엄마가 만들어준";
        this.resultFoodImg = "test";
        this.resultPercent = "12";
        this.resultText = "새로운 것보다 익숙한 것을 좋아하고 그런 익숙한 상황에 안정감을 찾아가요. 어쩌면 지루하고 평범한 것을 최고로 좋아하는 사람이지요. 끈기가 있기때문에 하고자 하는 일에 끝까지 열심히 도전을 하고, 변화를 좋아하는 않지만 자기가 살아온 방식에서 벗어나지 않는 선에서 최선을 다해 노력해 나갑니다.";
        this.resultGoodMbti = "INFP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "같이 있으면 편한 안주같은 당신, 돌문어숙회";
        this.resultBadMbti = "INFJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "심심함이 매력인 무우국";
      break;
      case "ISFJ":
        this.resultTitle = "매운 냉면";
        this.resultSubTitle = "남들은 시원하게 먹는 냉면, 나 혼자";
        this.resultFoodImg = "test";
        this.resultPercent = "8";
        this.resultText = "남들은 시원하게 먹는 냉면을 본인은 혼자 골머리를 앓아서 결국은 혼자 쓴맛을 보게 되는 스타일이에요. 남들을 필요이상으로 배려하고 노력하는 모습에 많은 사람들이 따르지만 정작 자기자신은 힘들어하는 스타일이에요. 한번 시작하면 끝을 봐야하는 성격이고, 그게 아니라면 시작할 생각을 하지않아요. 남들을 생각하는 예쁜 마음을 나를 아끼는 데에도 써보는게 어떨까요?";
        this.resultGoodMbti = "ESTJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "든든하고 논리적인, 곰탕";
        this.resultBadMbti = "ENTP";
        this.resultBadFood = "test";
        this.resultBadTitle = "새로움이 좋은 불고기 국수";
      break;
      case "INFJ":
        this.resultTitle = "무우국";
        this.resultSubTitle = "심심함이 매력인";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "삶의 의미가 무엇인지에 대해서 진지하게 생각하고 혼자만의 시간을 아주 소중하게 생각해요. 생각이 많을 때는 혼자 조용하고 평화롭게 고민하는 것을 선호하고, 시간이 남으면 혼자 집에서 자기만의 시간을 즐기는 것을 좋아하는 어쩌면 재미없는 스타일이라고 할 수도 있겠네요. 통찰력이 좋아서 주변사람들에게 큰 영향력이 되고, 무엇이든 장기적으로 생각하고 노력하는 모습으로 멋있고 진중한 스타일입니다.";
        this.resultGoodMbti = "ESTJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "든든하고 논리적인, 곰탕";
        this.resultBadMbti = "ESTP";
        this.resultBadFood = "test";
        this.resultBadTitle = "냉장고에 있는 거 다 때려 넣었는데  어쩌다 보니 김치만두?";
      break;
      case "INTJ":
        this.resultTitle = "제육볶음";
        this.resultSubTitle = "내가 혼자 만드는 든든한 한끼";
        this.resultFoodImg = "test";
        this.resultPercent = "6";
        this.resultText = "독창적이고, 자신이 결심한 일은 실현시킬 수 있는 능력자여서 정말 스스로 만드는 든든한 한끼가 어울리는 사람입니다. 자기자신을 믿고 일을 수행해나가는 모습이 너무나 멋있는 사람이네요. 꽂히면 해야만 하는 성격에 그 분야의 전문가가 될 수 있습니다. 실행력도 좋지만 자신이 한 일에 반성도 할 줄 알아서 큰 어려움은 없습니다. 하지만 다른 사람과 어울리는 일에도 흥미를 가져보는 건 어떨까요?";
        this.resultGoodMbti = "ESFJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "든든하고 논리적인 곰탕";
        this.resultBadMbti = "ESFP";
        this.resultBadFood = "test";
        this.resultBadTitle = "이 파티의 주인공은 바로나, 폭립바비큐";
      break;
      case "ISTP":
        this.resultTitle = "족발";
        this.resultSubTitle = "배달음식하면 족발이지!";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "세상 모든 일이 귀찮고, 직접 해먹는 것은 더욱 귀찮지만 틀에 박힌 생활은 싫어하는 신기한 스타일. 항상 도전하는 모습이 멋있고 모험을 즐기지만 막상 움직이지는 않아요. 귀찮다고 생각해서 하지않은 일들이 수두룩하지만 머리가 좋아서 마음만 먹으면 얼마든지 잘해나갈 수 있어요. 귀찮다고만 생각하지 말고 조금 더 적극 적으로 실천하려고 노력해보는 것은 어떨까요?";
        this.resultGoodMbti = "ENFP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "충격적이지만 매력적이어서 끊을 수 없는 마라탕";
        this.resultBadMbti = "ENFJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "인기 많고 알싸한, 마늘 통닭";
      break;
      case "ISFP":
        this.resultTitle = "라면";
        this.resultSubTitle = "혼자라면 라면도 진수성찬";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "남한테 간섭 받는 것을 몹시 싫어하고, 누군가와 함께 하는 것 만으로도 힘들어해요. 침대 하나만 있어도 혼자 재미있게 놀 수 있고, 태생적으로 낙천적이어서 미룰 수 있을 때까지 최선을 다해 미뤄요. 생각하고 계획은 많이 해도 행동력은 0%라 이런 성격이 많은 걸림돌이 될거에요. 미래보다 현재를 위해 실천해보는 것은 어떤가요?";
        this.resultGoodMbti = "ENTP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "새로움이 좋은 불고기 국수";
        this.resultBadMbti = "ENTJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "든든하고 논리적인, 곰탕";
      break;
      case "INFP":
        this.resultTitle = "돌문어숙회";
        this.resultSubTitle = "같이 있으면 편한 안주같은 당신";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "당신은 주변사람들에게 공감을 잘해주고, 마음도 따뜻하고 생각이 바라서 남들에게 상처 주는 말을 하지않으려고 노력해요. 항상 배려하고 노력하는 마음이 예뻐서 차분하고 큰 탈이 없지만, 게으른 완벽주의자 성격에 시작조차 하지않아서 일이 진행되기 힘듭니다. 서툴더라도 실행에 옮기는 습관을 가진다면 오늘보다 내일이 더 밝을 거에요.";
        this.resultGoodMbti = "ESTP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "냉장고에 있는 거 다 때려 넣었는데  어쩌다 보니 김치만두?";
        this.resultBadMbti = "ESTJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "든든하고 논리적인, 곰탕";
      break;
      case "INTP":
        this.resultTitle = "보쌈";
        this.resultSubTitle = "혼자서도 잘 먹는";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "당신은 혼자 하는 일에 굉장히 행복감을 느낍니다. 혼자 무언가를 먹을 때도 외로움보다는 혼자 많은 것을 먹을 수 있음에 행복감을 느끼는 스타일이지요. 무엇이든 이론이 빠삭하지만 그것을 행동으로 옮기는 데에 아주 오랜 시간이 걸려요. 당신이 가진 생각을 직접 실천만 하면 목표를 달성할 수 있으니 지금 당장 실천해보세요!";
        this.resultGoodMbti = "ESFP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "파티의 주인공은 바로나, 폭립바비큐";
        this.resultBadMbti = "ESFJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "날이면 날마다 삼겹살 파티";
      break;
      case "ESTP":
        this.resultTitle = "김치만두";
        this.resultSubTitle = "냉장고에 있는 거 다 때려 넣었는데  어쩌다 보니";
        this.resultFoodImg = "test";
        this.resultPercent = "4";
        this.resultText = "어쩌다 보니 성공하고, 살아가다 보니 되는 긍정의 아이콘입니다. 그냥 나는 살아가는 대로 나름 즐기며 살고 있는데 남들은 나를 되게 부러워하고 멋있다고 생각해요. 인생을 즐기는 것을 너무 의미를 둔 나머지 다른 걸 놓치고 있지는 않은지 잘 생각해 보아야해요!";
        this.resultGoodMbti = "INFP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "같이 있으면 편한 안주같은 당신, 돌문어숙회";
        this.resultBadMbti = "INFJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "심심함이 매력인 무우국";
      break;
      case "ESFP":
        this.resultTitle = "폭립바비큐";
        this.resultSubTitle = "이 파티의 주인공은 바로나";
        this.resultFoodImg = "test";
        this.resultPercent = "5";
        this.resultText = "어느 파티나 바비큐는 파티의 하이라이트이기 마련이죠. 이처럼 당신도 바비큐같이 사람들 사이에서 핵심적인 인물입니다. 파티를 한다면 그 파티를 만든 사람이 되고, 사람들은 당신이 이런 자리를 만든 것에 대해 무척이나 고마워합니다. 인싸력과 함께 배려심도 넘치지만, 그런 당신은 그런 성향에 따라 공부 모임이 자연스럽게 술 모임이 되고있지는 않은지 조심해야겠네요.";
        this.resultGoodMbti = "INTP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "배달음식하면 족발이지. 족발";
        this.resultBadMbti = "INTJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "내가 혼자 만드는 든든한 한끼, 제육볶음";
      break;
      case "ENFP":
        this.resultTitle = "마라탕";
        this.resultSubTitle = "충격적이지만 매력적이어서 끊을 수 없는";
        this.resultFoodImg = "test";
        this.resultPercent = "8";
        this.resultText = "당신의 엉뚱함이 다른 사람들에게 충격을 안겨 주기도 하지만, 대게는 그런 당신의 성격에 매력을 느끼게 돼요! 뭔가를 마음먹으면 어느 날 갑자기 마음먹고 일을 진행하는 일이 많으며, 끈기만 있다며 꾸준히 성장하는 나를 볼 수 있을 거예요";
        this.resultGoodMbti = "INTP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "혼자서도 잘 먹는 보쌈";
        this.resultBadMbti = "ISTJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "엄마가 만들어준 고추장 찌개";
      break;
      case "ENTP":
        this.resultTitle = "국수";
        this.resultSubTitle = "새로움이 좋은 불고기";
        this.resultFoodImg = "test";
        this.resultPercent = "5";
        this.resultText = "창의력이 풍부하고 새로운 일을 시도하는 것에 대해 무서워 하지 않아요. 마음만 먹으면 못하는게 없는 당신은 어떻게 말하면 능력자라고도 부를 수 있겠네요. 자신이 생각해낸 것을 현실화 시킬 수 있는 능력이 있고, 자신이 하고자 하는 일을 뚝심 있게 계속한다면 성취할 수 없는게 없을 거예요!";
        this.resultGoodMbti = "ISFP";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "혼자라면 라면도 진수성찬, 라면";
        this.resultBadMbti = "ISFJ";
        this.resultBadFood = "test";
        this.resultBadTitle = "남들은 시원하게 먹는 냉면, 나 혼자 매운 냉면";
      break;
      case "ESTJ":
        this.resultTitle = "곰탕";
        this.resultSubTitle = "든든하고 논리적인";
        this.resultFoodImg = "test";
        this.resultPercent = "12";
        this.resultText = "매사에 철두철미하고, 계획적인 스타일이에요. 책임감이 강해서 친구들이 잘 따르고 논리적이고 분석적이어서 가끔은 친구들에게 상처 되는 말을 하기도 해요. 철저한 계획을 잘 세우고 계획에 잘 따라서 주변에서 걱정을 하지않고, 실행력도 강해서 하는 일이 성공할 확률이 크지만, 주변 사람들한테까지도 뼈 때리는 말은 조심하는게 어떨까요?";
        this.resultGoodMbti = "INFJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "심심함이 매력인 무우국";
        this.resultBadMbti = "INFP";
        this.resultBadFood = "test";
        this.resultBadTitle = "같이 있으면 편한 안주같은 당신, 돌문어숙회";
      break;
      case "ESFJ":
        this.resultTitle = "삼겹살";
        this.resultSubTitle = "날이면 날마다 고기고기 파티";
        this.resultFoodImg = "test";
        this.resultPercent = "12";
        this.resultText = "노는게 세상에서 제일 좋은 당신. 친구들은 물론 친구의 친구까지 모아서 날이면 날마다 파티를 합니다. 당신을 처음 본 사람 조차 당신의 인싸력에 놀라며 좋아해요! 이런 성격에 비해 철두철미한 자기관리하는 모습 또한 소유하고있는 계획적이 사람입니다. 하지만 귀가 얇아서 눈이 돌아가는 일이 많지만 본질에 충실하게 자신의 일을 하게 된다면 좋은 성과가 있을 거에요.";
        this.resultGoodMbti = "INTJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "내가 혼자 만드는 든든한 한끼, 제육볶음";
        this.resultBadMbti = "INTP";
        this.resultBadFood = "test";
        this.resultBadTitle = "혼자서도 잘 먹는 보쌈";
      break;
      case "ENFJ":
        this.resultTitle = "마늘 통닭";
        this.resultSubTitle = "인기 많고 알싸한";
        this.resultFoodImg = "test";
        this.resultPercent = "5";
        this.resultText = "사람을 좋아하고 헌신적이며, 따뜻한 마늘통닭처럼 많은 사람들이 당신을 좋아해요. 많은 사람들에게 따뜻한 인상을 주고, 책임감 있고, 열정적인 성격입니다. 탈없고 긍정적이어서 성격이 좋지만, 거절을 못해서 계획이 틀어지는 일도 꽤나 많아요. 행동력을 잘 발휘한다면 원하는 목표에 한 발 더 가까워 질 수 있을 거에요!";
        this.resultGoodMbti = "ISTJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "엄마가 만들어준 고추장 찌개";
        this.resultBadMbti = "ISTP";
        this.resultBadFood = "test";
        this.resultBadTitle = "배달음식하면 족발이지. 족발";
      break;
      case "ENTJ":
        this.resultTitle = "햄버거";
        this.resultSubTitle = "체계적이지만 효율성 있는";
        this.resultFoodImg = "test";
        this.resultPercent = "6";
        this.resultText = "통송력이있고, 효율성 있는 성격으로 리더로써 적합한 사람이에요. 사람들은 그런 당신을 멋있고 결단력이 있어서 사람들이 당신을 부러워하는 경우가 많아요. 자신을  잘 컨트롤해서 멋있어 보이지만 한편으로 다가가기 조금 어려워 보일 수도 있어요. 당신의 통솔력을 조금 더 배려 있고 따뜻하게 해보는 것은 어떨까요?";
        this.resultGoodMbti = "ISFJ";
        this.resultGoodFood = "test";
        this.resultGoodTitle = "심심함이 매력인 무우국";
        this.resultBadMbti = "ISFP";
        this.resultBadFood = "test";
        this.resultBadTitle = "혼자라면 라면도 진수성찬, 라면";
      break;
      default:break;
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
  @import "@/assets/css/resultMbti.scss"
</style>