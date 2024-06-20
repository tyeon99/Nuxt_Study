<template>
  <div class="ContactContent">
    <div class="categoryContent">
      <div class="map">
        <img src="~/assets/img/map.png" alt="">
      </div>
      <div class="detail ko">
        지하철 5호선/9호선 여의도역하차 5번 출구(KRX한국거래소 방향)로 나오셔서 10분 거리 <br>
        지하철 9호선 샛강역하차 2번출구(KBS별관 방향)로 나오셔서 8분 거리
      </div>
      <div class="detail en">
        Take Subway Line 5 / Subway Line 9 Yeouido Station Exit 5 (KRX Korea Exchange direction) and walk for 10 minutes
        <br>
        Get off at Saetgang Station on Subway Line 9 and take Exit 2 (toward KBS Annex) for 8 minutes
      </div>
      <div class="info">
        <div class="flex justify-start items-center">
          <div class="flex justify-start items-start">
            <strong class="ko">주소</strong>
            <strong class="en !min-w-[100px]">Address</strong>
            <span class="ko">서울특별시 영등포구 국제금융로 70 (여의도동 43 미원빌딩 15층)</span>
            <span class="en">
              15, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea <br>
              ( Yeouido-dong Mi-won Bldg )
            </span>
          </div>
          <div class="flex justify-start items-start">
            <strong class="ko">대표번호</strong>
            <strong class="en">Representative number</strong>
            <span>1666-6300</span>
          </div>
        </div>
        <div class="flex justify-start items-center">
          <div class="flex justify-start items-start">
            <strong class="ko">이메일</strong>
            <strong class="en !min-w-[100px]">E-mail</strong>
            <span>E-mail help@thinkpoolcom</span>
          </div>
          <div class="flex justify-start items-start">
            <strong class="ko">팩스</strong>
            <strong class="en">Fax</strong>
            <span>02) 2174-6306</span>
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
    @apply flex-col items-center p-[10px_0_110px] gap-0;
  }

  .map{
    @apply max-w-[1358px] border border-[#d3d4d6] mb-[30px];
  }

  .detail{
    @apply w-full max-w-[1358px] mb-[75px] text-[#444] text-[18px] font-normal leading-[30px] text-left;
  }

  .info{
    @apply w-full max-w-[1358px];
  }

  .info strong{
    @apply block min-w-[75px] text-[#141414] text-[20px] font-bold leading-[30px] mr-[30px];
  }

  .info strong.en{
    @apply min-w-[235px];
  }

  .info span{
    @apply block min-w-[600px] text-[#444] text-[18px] font-normal leading-[30px];
  }

  .info span.en{

  }
</style>
