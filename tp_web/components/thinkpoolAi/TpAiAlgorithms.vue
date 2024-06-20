<template>
  <div class="TpAiAlgorithms">
    <div>
      <div class="title">ThinkPool AI Algorithms</div>
      <div class="subTitle ko">AI 시장 예측력, 퀀트의 종목 선별을 통한 알고리즘 간 시너지 도모</div>
      <div class="subTitle en">
        AI Market Prediction & Quant's Stock Picking to Create Synergy Between Algorithms
      </div>
      <div class="contentImg">
        <img src="~/assets/img/aiAlgoImg_ko.png" alt="" class="ko">
        <img src="~/assets/img/aiAlgoImg_en.png" alt="" class="en">
        <div class="aiAlgoImg02">
          <img src="~/assets/img/aiAlgoImg02_ko.png" alt="" class="ko">
          <img src="~/assets/img/aiAlgoImg02_en.png" alt="" class="en">
        </div>
      </div>
      <div class="alDetail">
        <div>
          <div class="title ko">퀀트 알고리즘</div>
          <div class="title en">Quantitative investment strategies </div>
          <div class="alCon">
            <div><img src="~/assets/img/alIconGroup.png" alt=""></div>
            <div class="txt ko">
              2003년부터 20여년간 지속적인 연구 개발 및 투자 성과 <br>
              기본 알고리즘의 성과를 바탕으로 <span>자문사 및 일임사 맞춤형 투자 알고리즘 개발 및 제공<br>
                증권사 로보마켓의 포트폴리오 서비스로 현재 운영 중</span>
            </div>
            <div class="txt en">
              20 years of continuous R&D and investment since 2003 <br>
              Develop and deliver customized investment algorithms to advisors and firms based on <br>
              the performance of the base algorithm
            </div>
          </div>
          <div class="detail ko">
            오랜 기간 전진 분석을 통한 명확한 알고리즘 성과 우위 & 종목별 재무가치 평가를 통한 안정적인 운영
          </div>
          <div class="detail en">
            Clear algorithmic performance advantage through long-term forward <br>
            analysis & stable operations through stock-by-stock financial valuation
          </div>
        </div>
        <div>
          <div class="title ko">AI 알고리즘</div>
          <div class="title en">AI Algorithms</div>
          <div class="alCon">
            <div class="txt ko">
              2023년 12월 기준, 매수 9개 매도 15개의 독립적인 AI알고리즘으로 종목별 매매 타이밍 생성 <br>
              변동성을 중심으로 학습된 개별 알고리즘은 지속적인 AI 학습을 통해 스스로 발전 중
            </div>
            <div class="txt en">
              As of December 2023, 9 buys and 15 sells, creating trading timings by stock with an independent AI algorithm <br>
              Individual algorithms trained around variability are developing themselves through continuous AI learning
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .TpAiAlgorithms{
    @apply p-[60px_0_150px] text-center flex justify-center items-center;
  }

  .title{
    @apply text-[#141414] text-[48px] font-bold leading-[60px] mb-[22px];
  }

  .subTitle{
    @apply text-[#444] text-[20px] font-normal leading-[25px] mb-[125px];
  }

  .alDetail{
    @apply w-full flex flex-col gap-[100px] items-start max-w-[1358px] mt-[90px] text-left;
  }

  .alDetail .title{
    @apply relative pl-[40px] text-[#141414] text-[28px] font-normal leading-[35px] before:content-[''] before:block before:absolute before:w-[25px] before:h-[25px] before:bg-[#5368ff] before:rounded-full before:left-0 before:top-[5px];
  }

  .alCon{
    @apply flex justify-start items-center gap-[27px] mb-[30px];
  }

  .alCon .txt{
    @apply text-[#141414] text-[20px] font-normal leading-[35px];
  }

  .alCon .txt span{
    @apply text-[#5368ff];
  }

  .alDetail .detail{
    @apply inline-block p-[6px_15px] rounded-[5px] bg-[#dde1ed] text-[#444] text-[20px] font-normal leading-[25px];
  }

  .contentImg{
    @apply relative pl-[300px];
  }

  .aiAlgoImg02{
    @apply absolute left-0 top-[85px];
  }
</style>
