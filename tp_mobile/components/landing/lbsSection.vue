<template>
  <div class="section">

    <div class="section-title">
      <span>LBS Part</span>
      <strong>LBS<em>(위치기반서비스)</em></strong>
    </div>

    <div class="section-txt">
      위치기반서비스를 통해 고객의 정보를 <br>
      보호하고 편의성을 추구합니다.
    </div>

    <div class="section-content">

      <div class="swiper lbsSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <div class="slide-title">로그인 보호 서비스</div>
              <div class="slide-txt">PC위치와 휴대폰 위치 비교를 통해<br>부정로그인을 판별하고 해킹을<br>방지합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[96px]" src="~/assets/img/lbs_img01.png" alt=""></div>
          </div>
          <div class="swiper-slide !pr-[21px]">
            <div>
              <div class="slide-title">안심키퍼 서비스</div>
              <div class="slide-txt">PC의 부정접속을 차단하고 <br>자녀의 과다한 PC사용을 통제합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[93px]" src="~/assets/img/lbs_img02.png" alt=""></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'lbsSection',

  mounted() {
    new Swiper(".lbsSwiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      // loop: true,
      centeredSlides: true,
      // loopedSlides: 1,
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/section';

  .section{
    @apply bg-[#DEE3EA];
  }

  .swiper-slide{
    @apply bg-white;
  }

  .lbsSwiper >>> .swiper-pagination-bullet {
    @apply w-[4px] h-[4px] m-[0px_2px] bg-white opacity-100;
  }

  .lbsSwiper >>> .swiper-pagination-bullet-active {
    @apply bg-mainColor rounded-[5px] w-[16px];
  }
</style>
