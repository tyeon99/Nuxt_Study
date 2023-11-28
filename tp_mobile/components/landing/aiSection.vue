<template>
  <div class="section">

    <div class="section-title">
      <span>AI Part</span>
      <strong>AI 증권사</strong>
    </div>

    <div class="section-txt">
      빅데이터, AI에 기반한 <span>초개인화, <br>
      초지능화</span> 투자지원 서비스를 제공합니다.
    </div>

    <div class="section-content">

      <div class="swiper aiSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <div class="slide-title">R1. AI 기자</div>
              <div class="slide-txt">AI기자가 누구보다 빠르고 정확하게<br> 뉴스를 전달합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[61px]" src="~/assets/img/ai_img01.png" alt=""></div>
          </div>
          <div class="swiper-slide">
            <div>
              <div class="slide-title">R2. AI 애널리스트</div>
              <div class="slide-txt">초지능화로 집단지성을 뛰어넘는 <br>투자정보를 생성합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[90px]" src="~/assets/img/ai_img02.png" alt=""></div>
          </div>
          <div class="swiper-slide">
            <div>
              <div class="slide-title">R3. AI 어드바이저</div>
              <div class="slide-txt">초개인화로 맞춤 투자정보를 <br>적시에 제공합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[85px]" src="~/assets/img/ai_img03.png" alt=""></div>
          </div>
          <div class="swiper-slide">
            <div>
              <div class="slide-title">R4. AI 트레이더</div>
              <div class="slide-txt">초지능화로 시장반응형<br>매매기술을 제공합니다.</div>
            </div>
            <div class="slide-img"><img class="w-[81px]" src="~/assets/img/ai_img04.png" alt=""></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'aiSection',

  mounted() {
    new Swiper(".aiSwiper", {
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

  .aiSwiper >>> .swiper-pagination-bullet {
    @apply w-[4px] h-[4px] m-[0px_2px] bg-[#D3D4D6] opacity-100;
  }

  .aiSwiper >>> .swiper-pagination-bullet-active {
    @apply bg-mainColor rounded-[5px] w-[16px];
  }
</style>
