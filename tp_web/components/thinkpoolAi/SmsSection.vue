<template>
  <div class="section">
    <div class="smsSection">
      <div class="left">
        <div class="img">
          <span><img src="~/assets/img/smsImg01.png" alt=""></span>
          <span><img src="~/assets/img/smsImg02.png" alt=""></span>
          <span><img src="~/assets/img/smsImg03.png" alt=""></span>
          <span><img src="~/assets/img/smsImg04.png" alt=""></span>
        </div>
        <div class="detail ko">&lt;SBS 신년특집 AI vs 인간 출연&gt;</div>
        <div class="detail en">&lt;SBS 신년특집 AI vs 인간 출연&gt;</div>
        <div class="tag">
          <div class="tagWrap">
            <img src="~/assets/img/smsIcon.png" alt="">
          </div>
        </div>
      </div>
      <div class="right">
        <span class="num">AXR2</span>
        <div class="title">
          <strong>SMS</strong>(Signal <br>Management System)
        </div>
        <div class="txt ko">
          국내 전종목 및 ETF를 대상으로 최적의 매매 타이밍을 잡아주는<br>
          종목별 AI시그널 생성 및 운영 시스템<br>
          SBS 2021년 신년특집 “AI vs. 인간” 주식 AI대표로 출연<br>
          (주식시장 대비 연율 42% 초과수익 달성)<br>
          투자자문사 등 맞춤형 투자 시스템 제공<br>
          (웰스투자자문 2021년부터 2023년말까지 운용수익 92% 달성)<br>
          NH자산운용 AI엔진 운용 사모펀드 출시 (100억원, 2024.03)
        </div>
        <div class="txt en">
          Created and operated stock-specific AI signals that provide <br>
          optimal trading timing for all domestic stocks and ETFs <br>
          Appeared as a stock AI representative on SBS's 2021 New <br>
          Year's special "AI vs. Humans" (achieved 42% annualized <br>
          outperformance compared to the stock market) <br>
          Provided customized investment system for investment <br>
          advisory firms <br>
          (Achieved 92% return on investment from 2021 to the end of <br>
          2023 for Wealth Investment Advisory) <br>
          Launched NH Asset Management AI engine-managed private <br>
          equity fund (KRW 10 billion, March 2024)
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
  .smsSection {
    @apply flex justify-center items-center gap-[100px];
  }

  .img{
    @apply grid grid-cols-2 gap-[10px] place-content-center;
  }

  .detail{
    @apply text-[#000] text-[15px] text-center font-medium mt-[15px] mb-[50px] leading-[18px];
  }

  .tag {
    @apply w-full flex justify-center items-center;
  }

  .right{
    @apply mb-[40px];
  }

  .num{
    @apply text-[#9395a1] text-[16px] font-normal leading-[20px] mb-[8px];
  }

  .title{
    @apply mb-[38px] text-[#141414] text-[48px] font-normal leading-[60px];
  }

  .txt{
    @apply text-[#444] text-[20px] font-normal leading-[25px];
  }

  .txt span{
    @apply text-[#5368ff];
  }
</style>
