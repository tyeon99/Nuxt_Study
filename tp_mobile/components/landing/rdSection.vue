<template>
  <div class="section">

    <div class="section-title">
      <span>국가R&D</span>
      <strong>연구개발 및<br> 국책과제 수행</strong>
    </div>

    <div class="section-content">

      <div class="swiper rdSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slide-top">
              <div><img class="w-[101px]" src="~/assets/img/rd_img01.png" alt=""></div>
            </div>
            <div class="slide-bot">
              <p>액티브시니어 생애설계와 자기계발<br>지원을 위한 런케이션 서비스 개발</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide-top">
              <div><img class="w-[92px]" src="~/assets/img/rd_img02.png" alt=""></div>
            </div>
            <div class="slide-bot">
              <p>우수기업연구소<br>육성사업(ATC+)</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slide-top">
              <div><img class="w-[92px]" src="~/assets/img/rd_img03.png" alt=""></div>
            </div>
            <div class="slide-bot">
              <p>빅데이터및 AI기반의 투자 및<br>자산관리지원 서비스 시스템 개발</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'rdSection',

  mounted() {
    new Swiper(".rdSwiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      loopedSlides: 1,
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
    @apply bg-[#272A42];
  }

  .section-title strong{
    @apply text-white mb-[35px];
  }

  .swiper-slide{
    @apply bg-white w-[273px] h-[226px] p-0;
  }

  .slide-top{
    @apply w-full flex justify-center items-center p-[25px_0px];
  }

  .slide-bot{
    @apply w-full h-[86px] bg-[#EEF1F4] rounded-[0px_0px_12px_12px] flex justify-center items-center;
  }

  .slide-bot p{
    @apply text-black text-[14px] font-normal leading-[18px];
  }

  .rdSwiper >>> .swiper-pagination-bullet {
    @apply w-[4px] h-[4px] m-[0px_2px] bg-white opacity-100;
  }

  .rdSwiper >>> .swiper-pagination-bullet-active {
    @apply bg-mainColor rounded-[5px] w-[16px];
  }
</style>
