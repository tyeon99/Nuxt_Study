<template>
  <div class="section ladingRdcBg">
    <div class="landingRdc">
      <div class="titleSpan ko">국가  R&D</div>
      <div class="titleSpan en">National R&D</div>
      <div class="sectionTitle ko">연구개발 및 국책과제 수행</div>
      <div class="sectionTitle en">Conducting R&D and government projects</div>
      <div class="sectionSubTitle ko">
        금융권서비스 분야에서 유일하게 병역특례 AI기술연구소 보유한 지식기업입니다.
      </div>
      <div class="sectionSubTitle en">
        the only knowledge company in the financial services sector with an AI <br> technology research center for military service. 
      </div>
      <div class="sectionContent">
        <div class="contentBox">
          <div class="img"><div class="img05"></div></div>
          <div class="boxTxt ko">
            액티브시니어 생애설계와 자기계발 <br> 지원을 위한 런케이션 서비스 개발
          </div>
          <div class="boxTxt en">
            Developing execution services to <br> support active senior life planning and <br>self-development            
          </div>
        </div>
        <div class="contentBox">
          <div class="img"><div class="img06"></div></div>
          <div class="boxTxt ko">
            글로벌 과학적 투자 지원을 위<br>한 AI기반 서비스 시스템 개발
          </div>
          <div class="boxTxt en">
            Advanced Technology Center Plus <br> (ATC+) <br><br>
          </div>
        </div>
        <div class="contentBox">
          <div class="img"><div class="img07"></div></div>
          <div class="boxTxt ko">
            디지털 전환 가속도를 위한 로우 <br> 코드 방식의 개발용 SW기술개발
          </div>
          <div class="boxTxt en">
            Developed a big data and AI-based <br> investment and asset management <br> support service system
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
  .ladingRdcBg{
    @apply w-full bg-[#272A42];
  }

  .landingRdc{
    @apply w-full text-center;
  }

  .sectionTitle{
    @apply text-[#fff];
  }

  .sectionSubTitle{
    @apply text-[#fff] leading-[45px];
  }

  .sectionContent{
    @apply flex justify-center items-start gap-[40px] pt-[120px];
  }

  .contentBox{
    @apply w-[426px] rounded-[12px];
  }

  .img{
    @apply flex justify-center items-center bg-[#fff] rounded-t-[12px] p-[66px_0_55px];
  }

  .boxTxt{
    @apply p-[45px_0] bg-[#eef1f4] rounded-b-[12px] text-[#141414] text-[20px] font-[300] leading-[30px];
  }
</style>
