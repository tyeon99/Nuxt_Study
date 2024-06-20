<template>
  <div class="OurValuesContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="contentTitle">
          씽크풀 <span>人</span>
        </div>
      </div>
      <div class="contentRight">
        <div class="listBox">
          <div class="list">
            <div class="icon">
              <div class="flex items-end"><span>發</span><em>(발)</em></div>
            </div>
            <div class="txt">
              <strong class="ko">열정을 발하는 人</strong>
              <strong class="en">
                People with passion
              </strong>
              <span class="ko">
                자신의 삶과 일에 열정을 가지고 미래에 도전하며, 그 열정이 동료에게 전달되는 사람
              </span>
              <span class="en">
                Someone who is passionate about their life and work, challenging <br> 
                the future, and conveying that passion to their coworkers. 
              </span>
            </div>
          </div>
          <div class="list">
            <div class="icon">
              <div class="flex items-end"><span>戰</span><em>(전)</em></div>
            </div>
            <div class="txt">
              <strong class="ko">전략적 사고를 하는 人</strong>
              <strong class="en">
                Strategic thinkers 
              </strong>
              <span class="ko">
                최고의 성과를 만들기 위해서 전략적 요소를 분석하고 모색하여 실행하는 사람
              </span>
              <span class="en">
                Someone who analyzes, identifies, and executes strategic elements <br> 
                to produce the best results. 
              </span>
            </div>
          </div>
          <div class="list">
            <div class="icon">
              <div class="flex items-end"><span>疏</span><em>(소)</em></div>
            </div>
            <div class="txt">
              <strong class="ko">소통을 잘하는 人</strong>
              <strong class="en">
                A good communicator
              </strong>
              <span class="ko">
                동료 간 적극적으로 소통하고 서로의 성장과 발전을 위해 끊임없이 노력하는 사람
              </span>
              <span class="en">
                People who actively engage with coworkers and constantly strive <br>
                to help each other grow and develop. 
              </span>
            </div>
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
    @apply gap-[350px];
  }

  .contentTitle::before{
    @apply left-[-20px] top-[-12px];
  }

  .contentTitle::after{
    @apply bottom-[-20px] left-[182px];
  }

  .contentTitle.en::after{
    @apply left-[240px];
  }

  .contentTitle{
    @apply text-[48px];
  }

  .contentTitle span{
    @apply text-[#5368ff];
  }

  .contentRight{
    @apply w-[800px];
  }

  .listBox{
    @apply flex flex-col justify-start items-start gap-[60px];
  }

  .list{
    @apply flex justify-start items-center gap-[35px];
  }

  .icon{  
    @apply w-[133px] h-[133px] rounded-full bg-[#8F9DFF] flex justify-center items-center;
  }

  .icon span{
    @apply block text-[48px] text-[#fff] font-normal leading-[50px];
  }

  .icon em{
    @apply block text-[20px] text-[#fff] font-normal leading-[30px];
  }

  .txt strong{
    @apply block text-[#141414] text-[20px] font-bold leading-[18px] mb-[20px];
  }

  .txt span{
    @apply text-[#444] text-[18px] font-normal leading-[30px];
  }
</style>
