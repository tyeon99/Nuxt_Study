<template>
  <div class="ceoExp">
    <div class="expList">
      <div class="title">주요경력</div>
      <div class="txt">한국은행, 은행감독원</div>
    </div>
    <div class="expList">
      <div class="title">방송활동</div>
      <div class="txt"><손에 잡히는 경제> 등 고정 게스트 <br>(1995~1999 MBC, KBS, SBS, CBS 등)</div>
    </div>
    <div class="expList">
      <div class="title">주요수상</div>
      <div class="txt">
        <span>- 2022년 국무총리 표창장 <br>&nbsp;&nbsp;&nbsp;(벤처창업진흥 유공포상)</span>
        <span>- 2016년 특허경영대상 특허청장 표창장 <br>&nbsp;&nbsp;&nbsp;(특허경영 금상)</span>
        <span>- 2013년 미래창조과학부장관 표창장 <br>&nbsp;&nbsp;&nbsp;(인터넷 대상 - 기술선도부문)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ceoExp',
}
</script>

<style lang="css" scoped>
  .ceoExp{
    @apply w-full p-[40px_20px_60px] bg-[#FAFAFC];
  }

  .expList{
    @apply p-[20px_0] border-b border-[#E6E6EB];
  }

  .expList:first-child{
    @apply pt-0
  }

  .expList:last-child{
    @apply pb-0 border-none;
  }

  .title{
    @apply mb-[16px] text-black text-[16px] font-bold leading-[24px];
  }

  .txt{
    @apply text-[#444] text-[14px] font-normal leading-[21px];
  }

  .txt span{
    @apply block mb-[16px];
  }

  .txt span:last-child{
    @apply mb-0;
  }
</style>