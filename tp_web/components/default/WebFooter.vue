<template>
  <div class="webFooter">
    <div class="footerWrapper">
      <div class="logoTxt">
        <div class="logo">
          <img src="~/assets/img/footerLogo.png" alt="하단 로고">
        </div>
        <div class="txt ko">
          주식회사 씽크풀  대표이사 : 김동진 <br>
          서울특별시 영등포구 국제금융로 70, 15층 <br> 
          (여의도동, 미원빌딩)  (우) 07333<br>
          대표번호 : 1666-6300<br>
          help@thinkpool.com<br>
          사업자등록번호 : 116-81-54775<br>
          Copyright ⓒ 1994-2024 ThinkPool Co.,Ltd.<br>
          All Rights Reserved  
        </div>
        <div class="txt en">
          Thinkpool.,co.ltd  CEO : Dong-jin Kim<br>
          15, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea<br>
          ( Yeouido-dong Mi-won Bldg )<br>
          Representative number 1666-6300 help@thinkpool.com<br>
          Business Registration Number 116-81-54775<br>
          Copyright 2023 ThinkPool Co., Ltd. <br>
          All Rights Reserved
        </div>
      </div>
      <div class="siteSns">
        <div class="siteSelect">
          <button class="selectbox" @click="showSelect">

            <div class="selected-txt">
              Family Site
            </div>

            <div v-if="showOptions" class="options">
              <button class="option-txt">라씨매매비서</button>
              <button class="option-txt">AI증권사</button>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 14L12 9L17 14" stroke="#A2A5BC"/>
            </svg>

          </button>
        </div>
        <div class="txt ko">
          (주)씽크풀의 다양한 소식을 만나보세요
        </div>
        <div class="txt en">
          Meet the latest news from Thinkpool. 
        </div>
        <div class="sns">
          <button><img src="~/assets/img/youtube.png" alt="유튜브 로고"></button>
          <button><img src="~/assets/img/blog.png" alt="블로그 로고"></button>
          <button><img src="~/assets/img/message.png" alt="메세지 로고"></button>
          <button><img src="~/assets/img/kakao.png" alt="카톡 로고"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
    }
  },
  methods: {
    showSelect() {
      this.showOptions = !this.showOptions
    },
  },  
}
</script>

<style scoped>
  .webFooter{
    @apply w-full bg-[#1F2237] p-[43px_0px_60px] flex justify-center items-center;
  }

  .footerWrapper{
    @apply max-w-[1360px] min-w-[1360px] flex justify-between items-start;
  }

  .logoTxt{
    @apply flex justify-start items-start gap-[55px];
  }

  .logo img{
    @apply w-[110px];
  }

  .txt{
    @apply text-[#A2A5BC] text-[13px] font-normal leading-[19.5px];
  }

  .siteSns{
    @apply flex flex-col items-start justify-start gap-[20px]
  }

  .selectbox{
    @apply relative w-[320px] flex justify-between items-center hover:cursor-pointer rounded-[5px] border border-[#A2A5BC] p-[10px_20px];
  }

  .selected-txt{
    @apply text-[#A2A5BC] text-[14px] font-normal leading-[21px];
  }

  .options{
    @apply w-[320px] p-[15px_20px_0] overflow-hidden absolute bottom-[41px] left-[-1px] text-left border border-[#A2A5BC] rounded-t-[5px] border-b-0 bg-[#1F2237];
  }

  .option-txt{
    @apply w-full text-[14px] text-left text-[#A2A5BC] pb-[3px];
  }

  .option-txt:last-child{
    @apply pb-[9px] border-b border-[rgba(162,165,188,0.50)];
  }

  .sns{
    @apply flex justify-start items-center gap-[15px];
  }

  .sns img{
    @apply w-[30px] h-[30px];
  }
</style>