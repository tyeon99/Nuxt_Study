<template>
  <div class="NationalRd">
    <div class="swiper rdSwiper">
      <div class="rdWrap swiper-wrapper">
        <div class="swiper-slide">
          <div class="titleSpan ko">국가R&D</div>
          <div class="titleSpan en">National R&D</div>
          <div class="title ko">서비스 산업융합 고도화 사업</div>
          <div class="title en">Svc Industry Convergence Advancement Project</div>
          <div class="rdContent">
            <img src="~/assets/img/RDImg01_ko.png" alt="" class="ko">
            <img src="~/assets/img/RDImg01_en.png" alt="" class="en">
          </div>
        </div>
        <NationalRd02></NationalRd02>
        <NationalRd03></NationalRd03>
        <NationalRd04></NationalRd04>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

</template>

<script>
export default {
  mounted() {
    new window.Swiper(".rdSwiper",{
      slidesPerView: '1',
      spaceBetween: 100,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}
</script>

<style scoped>
  .NationalRd{
    @apply flex justify-center items-center px-[100px];
  }

  .swiper-button-prev, .swiper-button-next{
    @apply text-[#ccc] w-[109px] h-[109px];
  }
</style>
