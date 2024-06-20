<template>
  <div class="section">
    <div class="landingPatent">
      <div class="txt ko">
        씽크풀은 <br>
        총 <span>97</span>건의 등록특허와 <span>11</span>건의 특허출원을 <br>
        보유하고 있습니다.
      </div>
      <div class="txt en">
        ThinkPool has a total of <span>97</span> issued patents and <span>11</span> <br> pending patent applications.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .landingPatent{
    @apply w-full text-center;
  }

  .txt{
    @apply text-[#141414] text-[48px] font-normal leading-[70px];
  }

  .txt span{
    @apply text-[#5368ff] font-bold;
  }
</style>
