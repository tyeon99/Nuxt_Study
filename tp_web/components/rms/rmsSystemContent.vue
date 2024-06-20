<template>
  <div class="rmsSystemContent">
    <div class="rmsWrap">
      <div class="imgWrap">
        <div class="img">
          <img src="~assets/img/rmsImg_ko.png" alt="" class="ko">
          <img src="~assets/img/rmsImg_en.png" alt="" class="en">
        </div>
        <div class="iconBox">
          <img src="~/assets/img/rmsIcon.png" alt="">
        </div>
      </div>
      <div class="txtWrap">
        <div class="subTitle ko">리스크관리솔루션</div>
        <div class="subTitle en">Risk Management Solution</div>
        <div class="title ko">RMS통제시스템</div>
        <div class="title en">RMS System</div>
        <div class="detail ko">
          2005년 국내최초로
          대우증권과 KB저축은행(구, 제일저축은행)에 <br>
          시스템을 개발/제공 <br><br>
          증권 12개사, 대출기관 22개사, 상품 총 90개
        </div>
        <div class="detail en">
          Developed and provided systems to Daewoo Securities<br>
          and KB Savings Bank for the first time in Korea in 2005 <br><br>
          12 securities firms, 22 lenders, 90 products in total
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
  .rmsSystemContent{
    @apply flex justify-center items-center p-[90px_0_120px];
  }

  .rmsWrap{
    @apply flex justify-center items-center gap-[200px];
  }

  .imgWrap{
    @apply flex flex-col justify-center items-center gap-[40px];
  }

  .txtWrap{
    @apply w-[533px];
  }

  .subTitle{
    @apply text-[#9395a1] text-[16px] font-normal leading-[20px] mb-[8px];
  }

  .title{
    @apply text-[#141414] text-[48px] font-bold leading-[60px] mb-[40px];
  }

  .detail{
    @apply text-[#444] text-[20px] font-normal leading-[25px];
  }
</style>
