<template>
  <div class="section">

    <div class="section-title">
      <span>RM Part</span>
      <strong>RM 사업</strong>
    </div>

    <div class="section-txt">
      Risk Management
    </div>

    <div class="section-content">

      <div class="swiper rmSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <div class="slide-title">RMS <br>(자동대출) 통제시스템</div>
              <div class="slide-txt">초개인화, 초지능화에 기반한<br>스마트한 자산운용이 시작됩니다.</div>
            </div>
            <div class="slide-img"><img class="w-[96px]" src="~/assets/img/rm_img01.png" alt=""></div>
          </div>
          <div class="swiper-slide !pr-[12px]">
            <div>
              <div class="slide-title">소상공인 대출<br>리스크관리 솔루션</div>
              <div class="slide-txt">빅데이터와 AI에 기반하여 다양한 <br>리스크를 사전에 예측하고 관리합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[93px]" src="~/assets/img/rm_img02.png" alt=""></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'rmSection',

  mounted() {
    new Swiper(".rmSwiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      loopedSlides: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
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
    @apply bg-white;
  }

  .swiper-slide{
    @apply bg-[#F4F5F6];
  }

  .rmSwiper >>> .swiper-pagination-bullet {
    @apply w-[4px] h-[4px] m-[0px_2px] bg-[#D3D4D6] opacity-100;
  }

  .rmSwiper >>> .swiper-pagination-bullet-active {
    @apply bg-mainColor rounded-[5px] w-[16px];
  }
</style>
