<template>
  <div class="section">
    <div class="landingRms">
      <div class="titleSpan ko">리스크관리솔루션</div>
      <div class="titleSpan en">Risk Management Solution</div>
      <div class="sectionTitle ko">리스크관리솔루션</div>
      <div class="sectionTitle en">RM Business</div>
      <div class="sectionSubTitle ko">
        체계적인 리스크 관리를 통해 저금리로 안정적인 유동성을 공급합니다.
      </div>
      <div class="sectionSubTitle en">
        Provide stable liquidity at low interest rates with systematic risk management. 
      </div>
      <div class="sectionContent">
        <div class="contentBox">
          <div class="img"><div class="img03"></div></div>
          <div class="boxTitle ko">RMS (자동대출) <br> 통제시스템</div>
          <div class="boxTitle en">RMS <br>(Automated Loan Control System)</div>
          <div class="boxTxt ko">
            PC위치와 휴대폰 위치 비교를 통해 <br>
            부정로그인을 판별하고 해킹을<br>
            방지합니다.
          </div>
          <div class="boxTxt en">
            Smart wealth management based on <br>hyper-personalization and hyper- <br>intelligence begins.
          </div>
        </div>
        <div class="contentBox">
          <div class="img"><div class="img04"></div></div>
          <div class="boxTitle ko">소상공인 대출 <br> 리스크관리 솔루션</div>
          <div class="boxTitle en">Small Business Lending Risk <br>Management Solutions</div>
          <div class="boxTxt ko">
            PC의 부정접속을 차단하고 <br>
            자녀의 과다한 PC사용을 통제합니다.
          </div>
          <div class="boxTxt en">
            Proactively predict and manage <br> various risks based on big data and AI
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
  .landingRms{
    @apply w-full text-center;
  }

  .sectionContent{
    @apply flex justify-center items-center gap-[350px] pt-[220px];
  }

  .img{
    @apply flex justify-center items-center mb-[40px];
  }

  .boxTitle{
    @apply text-[#141414] text-[28px] font-bold leading-[35px] mb-[35px];
  }

  .boxTxt{
    @apply text-[#141414] text-[20px] font-[300] leading-[30px];
  }
</style>
