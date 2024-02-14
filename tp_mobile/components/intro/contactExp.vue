<template>
  <div class="contactExp">

    <div class="map">
      <img src="~/assets/img/map.png" alt="지도">
    </div>

    <div class="txt">
      <div>지하철 5호선/9호선 여의도역하자 5번출구(KRX한국거래소 방향)로 나오셔서 10분 거리 지히철 9호선 샛강역하차 2번출구(KBS별관 방향)로 나오셔서 8분 거리</div>
      <div><span>주소</span>서울 특별시 영등포구 국제금융로 70 <br>(여의도동 43 미원빌딩 15층)</div>
      <div><span>대표전화</span>1666-6300</div>
      <div><span>FAX</span>02) 2174-6306</div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/style';

  .contactExp{
    @apply p-[0px_15px_50px];
  }

  .map{
    @apply border-[1px] border-[#D3D4D6];
  }

  .txt{
    @apply mt-[20px] flex flex-col gap-[20px];
  }

  .txt div{
    @apply text-[14px] font-normal text-[#444] leading-[21px];
  }

  .txt div span{
    @apply font-bold text-black block;
  }
</style>