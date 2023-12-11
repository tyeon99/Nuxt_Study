<template>
  <div class="introMain">

    <div class="mainTitle">
      <span>CEO Message</span>
      <strong>CEO메시지</strong>
    </div>

    <div class="mainImg">
      <img src="~/assets/img/message_mainImg.png" alt="">
    </div>

    <div class="mainTxt">
      안녕하세요, <br>
      씽크풀 대표이사 <br>
      김동진입니다.
    </div>

    <div class="mainStxt">
      투자금융과 마이데이터 분야에서 씽크풀만의 독자적인 기술을 더욱 발전시켜 글로벌 경쟁력을 갖춘 기업으로 성장해 나가겠습니다.
    </div>

  </div>
</template>

<script>
export default {
  name: 'introMain',
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/intro-main';

  .mainTxt::after{
    @apply z-[-1] absolute content-['”'] text-[128px] text-[#E6E6EB] top-[133px] left-[155px];
  }
</style>