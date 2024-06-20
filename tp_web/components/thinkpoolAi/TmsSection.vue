<template>
  <div class="section">
    <div class="tmsSection">
      <div class="left">
        <div class="img">
          <img src="~/assets/img/tmsImg_ko.png" alt="" class="ko">
          <img src="~/assets/img/tmsImg_en.png" alt="" class="en">
        </div>
        <div class="tag">
          <div class="tagWrap">
            <img src="~/assets/img/tmsIcon.png" alt="">
          </div>
        </div>
      </div>
      <div class="right">
        <span class="num">AXR3</span>
        <div class="title">
          <strong>TMS</strong>(Trading <br>Management System)
        </div>
        <div class="txt ko">
          종목별 호가, 체결 상태 등 주식 시장의 힘을 <span>AI가 학습하여 싸게 사고 <br>
          비싸게 팔 수 있도록 지원하는 시스템 <br></span>
          고객 주문에 대해, 시황/종목 변동을 실시간 반영한 <span>AI기반 최적 주문 <br>
          전략을 수립 하고, 주문시간, 분할횟수, 주문 가격을 자동으로 관리<br></span>
          AI 반응형 최적 주문전략 외 미체결 처리, 추격매매 방지, 주문상황 <br>
          실시간 보고 등의 다양한 주문 처리 기술 탑재
        </div>
        <div class="txt en">
          A system that enables AI to learn stock market forces such as <br>
          stock quotes and execution status to buy low and sell high. <br>
          For customer orders, establish AI-based optimal order <br>
          strategies that reflect market/stock fluctuations in real time, <br>
          and automatically manage order time, number of divisions, <br>
          and order price.<br>
          Equipped with various order processing technologies such as <br>
          open order processing, prevention of chasing trading, and <br>
          real-time order status reporting in addition to AI responsive <br>
          optimal order strategy
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
  .tmsSection {
    @apply flex justify-center items-center gap-[180px];
  }

  .tag {
    @apply w-full flex justify-center items-center mt-[50px];
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
