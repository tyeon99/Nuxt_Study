<template>
  <div class="visionExp">

    <div class="visionBox">
      <div class="titleNum">01</div>
      <div class="txt">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</div>
    </div>
    <div class="visionBox">
      <div class="titleNum">02</div>
      <div class="txt">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</div>
    </div>
    <div class="visionBox">
      <div class="titleNum">03</div>
      <div class="txt">투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'visionExp',
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/style';

  .visionExp{
    @apply p-[0px_20px_60px];
  }

  .visionBox{
    @apply w-full rounded-[20px] bg-[#FAFAFA] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] p-[30px_25px_25px] mb-[20px];
  }

  .visionBox:last-child{
    @apply mb-0;
  }

  .titleNum{
    @apply text-black text-[20px] font-bold leading-[18px] mb-[20px];
  }

  .txt{
    @apply text-[#444] text-[16px] font-normal leading-[24px];
  }
</style>