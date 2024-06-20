<template>
  <div class="section">
    <div class="landingRassi">
      <div class="titleSpan">ThinkPool AI</div>
      <div class="sectionTitle">AX RASSI</div>
      <div class="sectionSubTitle ko">
        AI증권사를 위한 씽크풀의 AI통합지원 시스템
      </div>
      <div class="sectionSubTitle en">
        ThinkPool's AI Integration Support System for AI Securities Firms 
      </div>
      <div class="sectionContent">
        <div class="txtBox">
          <div class="txt text-right">
            <div class="boxTitle">SMS</div>
            <div class="boxSubTitle">Signal  Management System</div>
            <div class="boxTxt ko">
              국내 전종목 및 ETF를 대상으로 <br>
              최적의 매매타이밍을 잡아주는 종목별  <br>
              AI시그널 시스템
            </div>
            <div class="boxTxt en">
              AI signals system for optimal <br>
              trade timing for all domestic <br>
              stocks and ETFs by sector 
            </div>
          </div>
        </div>
        <div class="rassiImg">
          <img src="~/assets/img/landingRassiImg.png" alt="섹션 라씨 이미지">
        </div>
        <div class="txtBox">
          <div class="txt text-left">
            <div class="boxTitle">PMS</div>
            <div class="boxSubTitle">Picking & Portfolio Management System</div>
            <div class="boxTxt ko">
              투자자가 종목 또는 포트폴리오를 <br>
              선택할 수 있도록 지원하는 시스템
            </div>
            <div class="boxTxt en">
              Systems that allow investors to <br> select stocks or portfolios 
            </div>
          </div>
          <div class="txt text-left">
            <div class="boxTitle">TMS</div>
            <div class="boxSubTitle">Trading Management System</div>
            <div class="boxTxt ko">
              종목별 호가, 체결 상태 등 <br>
              주식 시장의 힘을 AI가 학습하여  <br>
              싸게 사고 비싸게 팔 수 있도록 지원하는 시스템
            </div>
            <div class="boxTxt en">
              A system that enables AI to learn <br> stock market forces, such as quotes <br>and execution status, to buy low and sell high. 
            </div>
          </div>
        </div>
      </div>
      <div class="sectionBotTxt">
        <span>AX RASSI : AI Transformation by RASSI </span> (Robot Assembly System on Stock Investment)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .landingRassi{
    @apply w-full text-center;
  }

  .sectionContent{
    @apply flex justify-center items-center gap-[50px] pt-[100px];
  }

  .txtBox{
    @apply flex flex-col gap-[90px];
  }

  .boxTitle{
    @apply text-[#5368ff] text-[36px] font-bold leading-[45px] mb-[6px];
  }

  .boxSubTitle{
    @apply text-[#444] text-[20px] font-bold leading-[25px] mb-[15px];
  }

  .boxTxt{
    @apply text-[#444] text-[20px] font-normal leading-[25px];
  }

  .rassiImg img{
    @apply w-[650px];
  }

  .sectionBotTxt{
    @apply text-[#000] text-[20px] font-normal leading-[25px] mt-[80px];
  }

  .sectionBotTxt span{
    @apply text-[#5368ff];
  }
</style>
