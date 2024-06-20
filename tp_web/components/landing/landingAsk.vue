<template>
  <div class="section landingAskBg">
    <div class="landingAsk">
      <div class="title">
        Talk to THINKPOOL
      </div>
      <div class="txt ko">
        씽크풀에 오신 것을 환영합니다! <br>
        무엇을 도와드릴까요?
      </div>
      <div class="txt en">
        Welcome to ThinkPool. <br>
        How can we help?
      </div>
      <div class="askBtn">
        <button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
              <path d="M38.5278 18.6961C38.5278 7.56361 29.8894 0 20.2778 0C10.7675 0 2.02778 7.40139 2.02778 18.8178C0.811111 19.5072 0 20.805 0 22.3056V26.3611C0 28.5917 1.825 30.4167 4.05556 30.4167H6.08333V18.0472C6.08333 10.1997 12.4303 3.85278 20.2778 3.85278C28.1253 3.85278 34.4722 10.1997 34.4722 18.0472V32.4444H18.25V36.5H34.4722C36.7028 36.5 38.5278 34.675 38.5278 32.4444V29.9706C39.7242 29.3419 40.5556 28.105 40.5556 26.645V21.9811C40.5556 20.5617 39.7242 19.3247 38.5278 18.6961Z" fill="white"/>
              <path d="M14.1948 22.3056C15.3147 22.3056 16.2225 21.3977 16.2225 20.2778C16.2225 19.1579 15.3147 18.25 14.1948 18.25C13.0749 18.25 12.167 19.1579 12.167 20.2778C12.167 21.3977 13.0749 22.3056 14.1948 22.3056Z" fill="white"/>
              <path d="M26.3608 22.3056C27.4807 22.3056 28.3886 21.3977 28.3886 20.2778C28.3886 19.1579 27.4807 18.25 26.3608 18.25C25.2409 18.25 24.333 19.1579 24.333 20.2778C24.333 21.3977 25.2409 22.3056 26.3608 22.3056Z" fill="white"/>
              <path d="M32.4449 16.2837C31.4716 10.5045 26.4427 6.08398 20.3797 6.08398C14.2355 6.08398 7.62494 11.1737 8.15216 19.1632C13.1608 17.1151 16.9324 12.654 18.0072 7.21954C20.6635 12.5526 26.1183 16.2229 32.4449 16.2837Z" fill="white"/>
            </svg>
          </span>
          <span class="ko">문의하기</span>
          <span class="en">Contact us</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .landingAskBg{
    @apply w-full bg-[#5368ff];
  }

  .landingAsk{
    @apply w-full text-center;
  }

  .title{
    @apply text-[#fff] mb-[40px] text-[48px] font-bold leading-[60px];
  }

  .txt{
    @apply text-[#fff] text-[48px] font-normal leading-[60px] mb-[140px];
  }

  .askBtn{
    @apply w-full flex justify-center items-center;
  }

  .askBtn button{
    @apply w-[323px] h-[76px] leading-[76px] rounded-[50px] border border-[#fff] bg-[#5368ff] flex justify-center items-center gap-[12px];
  }

  .askBtn button span{
    @apply block text-[#fff] text-[36px] font-bold;
  }
</style>
