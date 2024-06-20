<template>
  <div class="ourVisionContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="contentTitle ko">
          데이터와 AI시대, 초지능형 <br>
          과학적 의사결정을 지원하는 <br>
          지식기업
        </div>
        <div class="contentTitle en">
          " Knowledge enterprises <br>
          supporting data, AI expectations, <br>
          and super-intelligent scientific <br>
          decision-making "
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong>01</strong>
            <span class="ko">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</span>
            <span class="en">We will further develop Thinkpool's unique technologies in the fields of investment banking and big data to grow into a global company with global competitiveness.</span>
          </div>
          <div class="list">
            <strong>02</strong>
            <span class="ko">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</span>
            <span class="en">We will further develop Thinkpool's unique technologies in the fields of investment banking and big data to grow into a global company with global competitiveness.</span>
          </div>
          <div class="list">
            <strong>03</strong>
            <span class="ko">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</span>
            <span class="en">We will further develop Thinkpool's unique technologies in the fields of investment banking and big data to grow into a global company with global competitiveness.</span>
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
  .categoryContent{
    @apply gap-[350px];
  }

  .contentTitle::before{
    @apply left-[-20px] top-[-12px];
  }

  .contentTitle::after{
    @apply bottom-[-2px] left-[100px];
  }

  .contentTitle.en::after{
    @apply left-[240px];
  }

  .name{
    @apply text-[#444] text-[20px] font-normal leading-[30px];
  }

  .name strong{
    @apply inline-block ml-[4px] text-[24px] font-bold;
  }

  .contentRight{
    @apply w-[655px];
  }

  .contentList{
    @apply border-none mb-0 flex flex-col items-start gap-[60px];
  }

  .list{
    @apply !p-[30px_20px] flex flex-col !gap-[20px] !items-start border-none;
  }

  .list span{
    @apply !leading-[30px];
  }

  .date{
    @apply text-[#999] text-[14px] font-normal leading-[18px] text-right;
  }
</style>
