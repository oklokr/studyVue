<template>
    <div class="wrap">
        <div class="content">
            <div class="main-page">
                <div class="main-page-title-wrap">
                    <h2>음식 유형 테스트</h2>
                </div>
                <div class="main-page-content-wrap">
                    <!-- @/assets/img/food-img.gif -->
                    <img src="" alt="음식사진" class="food-img">
                    <button class="start-btn" @click.once="startClickEvnet">음식 유형 테스트 시작하기</button>
                    <img src="@/assets/img/text-logo.png" alt="텍스트 로고" class="text-logo">
                </div>
            </div>
            <div class="question-wrap">
                <div class="page-gauge-bar-wrap">
                    <div class="gauge-bar">
                        <div class="gauge-inner-number">
                            <span class="gauge-number">1</span>
                        </div>
                    </div>
                </div>
                <div class="question-content-wrap">
                    <div class="question-box question-box-1">
                        <div class="question-title-warp">
                            <h2 class="question-title">친구들과 맛집에 간 당신, 맛집에 가서 음식을 마주한 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="s">먹는것도 계획적으로! 이것 저것 시켜서 소화가 잘되는 음식부터 먹자!</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="n">이 집 추천 메뉴! 이걸로 주세요~</button>
                        </div>
                    </div>

                    <div class="question-box question-box-2">
                        <div class="question-title-warp">
                            <h2 class="question-title">소개팅 장소를 음식점으로 정한 당신, 분위기가 어색한데 주문한 음식이 나왔다.</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="e">편하게 음식을 먹으며 대화를 이어나간다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="i">음식이 나왔지만 상대가 먼저 움직일 때까지 기다린다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-3">
                        <div class="question-title-warp">
                            <h2 class="question-title">오늘 저녁을 준비하는 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="j">메뉴를 미리 생각해 놓는 편! 미리 생각해서 재료를 준비한다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="p">냉장고에 뭐가 있더라.. 뭐라도 있겠지!^^</button>
                        </div>
                    </div>

                    <div class="question-box question-box-4">
                        <div class="question-title-warp">
                            <h2 class="question-title">음식을 시켰는데 음식에서 머리카락이 나왔다. 그때의 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="t">저기요! 머리카락이 나왔어요! 일단 따지고 본다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="f">나한테도 달린 머리카락. 빼고 먹지 뭐!</button>
                        </div>
                    </div>

                    <div class="question-box question-box-5">
                        <div class="question-title-warp">
                            <h2 class="question-title">맛있고 비쥬얼 좋은 음식이 나왔다. 당신은?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="f">남는 건 사진이다! 나의 뱃속에 들어가기 전 사진은 필수!</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="t">먹다 보니 사진을 안 찍었네..?</button>
                        </div>
                    </div>

                    <div class="question-box question-box-6">
                        <div class="question-title-warp">
                            <h2 class="question-title">친한 친구가 나를 위해 맛있는 음식을 만들어주었다. 하지만 이해할 수 없는 맛이 난다.</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="e">친구의 기분이 조금 상하더라도 음식 맛에 문제가 있음을 알린다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="i">그래도 마음이 우선이지. 웃음을 보이며 끝까지 다 먹는다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-7">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인을 만났다. 나는 주로 이런 데이트를 선호한다</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="e">핫플에서 맛있는 음식 사진도 찍고 맛집 탐방하는 데이트</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="i">집에서 편하게 TV보며, 음식 만드는 꽁냥거리는 데이트</button>
                        </div>
                    </div>

                    <div class="question-box question-box-8">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인과 데이트를 할 때 음식점에 가는 나는 주로</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="i">어떤 음식점에 갈지 서칭하고 미리 예약 하거나 웨이팅은 없는지 알아본다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="e">만나서 그때 당기는 음식을 생각하며, 즉흥적으로 가고 싶은 곳으로 향한다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-9">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인이 나를 위해 맛집을 예약한다. 내가 선호하는 것은?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="t">서로 상의하에 맛집을 골랐으면..</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="f">마음이 느껴지기만 한다면 어떤 맛집이라도 OK</button>
                        </div>
                    </div>

                    <div class="question-box question-box-10">
                        <div class="question-title-warp">
                            <h2 class="question-title">회사를 다니는 나, 매일 회사식당에서 식사를 하는 나</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="j">좋아. 균형 잡힌 식사가 저렴하니 이 정도면 난 아주 만족!</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="p">내 돈을 내더라도 그날의 내 스타일대로 먹고 싶은 걸?</button>
                        </div>
                    </div>

                    <div class="question-box question-box-11">
                        <div class="question-title-warp">
                            <h2 class="question-title">어쩌다 음식점에 갔는데 내 입에 딱 맞는 음식이 나왔다. 이때 나는</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="s">맛에 대해 궁금해 하며 재료가 뭔지 어떻게 만들었을지 생각하며 먹는다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="n">현재 맛있는 음식을 먹고 있다는 것에 행복해 하며 현재를 즐긴다. </button>
                        </div>
                    </div>

                    <div class="question-box question-box-12">
                        <div class="question-title-warp">
                            <h2 class="question-title">오늘따라 연인이 우울해 보인다. 이때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="j">카페에 가서 상황을 해결하기 위해 현실적인 해결책을 생각해본다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="p">연인이 좋아하는 음식점에 가서 맛있는 음식 먹으면서 공감하고 위로해준다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-13">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인과 길을 걷다 내가 먹어보지 못한 음식을 먹어보자고 한다. 이때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="n">음식은 도전할수록 음식 폭이 넓어지는 법. 가자! 그 곳으로.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="s">나..ㄴ…는… 그,,거.. 안 먹어,, 봤는,,뒙.. 고민이 된다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-14">
                        <div class="question-title-warp">
                            <h2 class="question-title">디저트를 배달시켰다. 하지만 배달이 30분 지연된다. 이때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="j">내 케이크에 무슨 일이 생긴 걸까? 수시로 핸드폰을 들여다본다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="p">언젠가 오겠지~ 하면서 크게 신경 쓰지는 않는다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-15">
                        <div class="question-title-warp">
                            <h2 class="question-title">친구와 카페를 가고 싶어서 카페를 서칭 중일 때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="s">엉덩이가 편하고 음료가 맛있는 곳을 고른다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="n">꺅! 이 분위기 뭐야! 나는 감성 있는 이 곳으로 가고 싶어!</button>
                        </div>
                    </div>

                    <div class="question-box question-box-16">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인과 다정하게 음식을 만들고 있는데 이런 요리가 망해가고 있다. 이때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="t">요리를 살리기 위해 연인과 현실적인 요리의 방향을 찾아간다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="f">연인과 만든 음식이라면 맛이 없어도 추억! 서로 행복하게 식사를 한다.</button>
                        </div>
                    </div>

                    <div class="question-box question-box-17">
                        <div class="question-title-warp">
                            <h2 class="question-title">배가 고픈데 지금 해야 할 일이 너무 많다. 이때 나는?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="p">다 먹고 살자고 하는 일인데 뭐, 먼저 밥부터 먹자!</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="j">배가 고파도 지금 하는 일이 끝나지 않으면 음식이 안 넘어가, 먼저 일을 끝내고 먹자!</button>
                        </div>
                    </div>

                    <div class="question-box question-box-18">
                        <div class="question-title-warp">
                            <h2 class="question-title">연인이 너무 가고 싶어하는 맛집이 있는데 생각보다 거리가 멀다. 이때는 난?</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="t">비슷한 맛집을 찾아서 연인에게 제안한다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="f">그 맛집을 먹으러 가는 김에 얼굴도 오래 보고 데이트도 오래하자!</button>
                        </div>
                    </div>

                    <div class="question-box question-box-19">
                        <div class="question-title-warp">
                            <h2 class="question-title">여행 중 배가 너무 고프다. 맛집을 찾아보자!</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="s">보장되어있는 맛집은 당연 너가 알고 내가 아는 그 집! 체인점을 선택한다.</button>
                            <button class="question-click-item" @click.once="[nextEvent(), dataInput($event)]" data-typeVal="n">새로운 곳에 왔으면 허름해도 맛집을 찾아줘야 인지상정! 어디 한번 알아보자!</button>
                        </div>
                    </div>

                    <div class="question-box question-box-20">
                        <div class="question-title-warp">
                            <h2 class="question-title">지금 바다 앞 횟집 골목에 왔다!</h2>
                        </div>
                        <div class="question-click-itme-warp">
                            <button class="question-click-item" data-typeVal="e" @click.once="[dataInput($event), dataCheck(), routerEvnet()]">내 느낌상 오른쪽에서 두번째 횟집이 사람도 많고 맛있어 보인다. 여기로 가자.</button>
                            <button class="question-click-item" data-typeVal="i" @click.once="[dataInput($event), dataCheck(), routerEvnet()]">이런 건 호구 당하기 쉽지. 블로그를 뒤져보며 가성비를 보자!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MBtiTest",
    data() {
        return {
            countNum : 0,
            typeE : 0,
            typeI : 0,
            typeS : 0,
            typeN : 0,
            typeT : 0,
            typeF : 0,
            typeJ : 0,
            typeP : 0,
            mbti : ""
        }
    },
    methods: {
        startClickEvnet(){
            document.querySelector('.main-page').classList.add('active');
            document.querySelector('.question-box-1').classList.add('open');
            
            setTimeout(() => { 
                document.querySelector('.page-gauge-bar-wrap').classList.add('active');

                setTimeout(() => {
                    document.querySelector('.main-page').remove()
                }, 300);
            }, 300);
        },
        nextEvent(){
            this.countNum++
            const thisCount = this.countNum;
            const nextCount = thisCount + 1;
            let gaugeVal = thisCount * 4.7526;

            setTimeout(() => { 
                document.querySelector(".gauge-number").innerHTML = nextCount;

                setTimeout(() => { document.querySelector(".question-box-"+thisCount+"").remove() }, 300);
            }, 300);
            document.querySelector(".gauge-bar").style.left = gaugeVal + "%"
            document.querySelector(".question-box-"+thisCount+"").classList.add("active");
            document.querySelector(".question-box-"+nextCount+"").classList.add("open");
        },
        dataInput(event){
            const clickDataVal = event.target.getAttribute("data-typeVal");

            switch (clickDataVal) {
                case "e": this.typeE++; break;
                case "i": this.typeI++; break;
                case "s": this.typeS++; break;
                case "n": this.typeN++; break;
                case "t": this.typeT++; break;
                case "f": this.typeF++; break;
                case "j": this.typeJ++; break;
                case "p": this.typeP++; break;
                default: console.log('클릭 데이터값 오류입니다.'); break;
            }

            event.target.classList.add('active');
            event.target.parentNode.firstChild.classList.add('pointer-none');
            event.target.parentNode.lastChild.classList.add('pointer-none');
        },
        dataCheck(){
            if(this.typeE > this.typeI){
                this.mbti = "E"
            }else if(this.typeI > this.typeE){
                this.mbti = "I"
            }else {
                console.log('저장 값 오류입니다.') 
            }

            if(this.typeS > this.typeN){
                this.mbti += "S"
            }else if(this.typeN > this.typeS){
                this.mbti += "N"
            }else {
                console.log('저장 값 오류입니다.') 
            }

            if(this.typeT > this.typeF){
                this.mbti += "T"
            }else if(this.typeF > this.typeT){
                this.mbti += "F"
            }else {
                console.log('저장 값 오류입니다.') 
            }

            if(this.typeJ > this.typeP){
                this.mbti += "J"
            }else if(this.typeP > this.typeJ){
                this.mbti += "P"
            }else {
                console.log('저장 값 오류입니다.') 
            }

            console.log(this.mbti)
        },
        routerEvnet(){
            this.$router.push({path: 'resultMbti', query: {mbti: this.mbti}})
        }
    }
}
</script>

<style> html, body, #app { height: 100%; } </style>

<style scoped lang="scss">
    @import "@/assets/css/MbtiTest.scss"
</style>