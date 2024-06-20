<template>
  <div class="section">
    <div class="landingNews">
      <div class="titleSpan">NEWS</div>
      <div class="sectionTitle ko"><strong>최신 뉴스</strong> 소식을 만나보세요.</div>
      <div class="sectionTitle en">Stay up to date with the latest news </div>
      <div class="sectionContent">
        <div class="contentBox">
          <div class="boxTitle text-truncate2 ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상
          </div>
          <div class="boxTitle text-truncate2 en">
            Won the Prime Minister's Award for Meritorious Contribution to Venture Startup Promotion 2022         
          </div>
          <div class="boxTxt text-truncate3 ko">
            금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
          </div>
          <div class="boxTxt text-truncate3 en">
            Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony.
          </div>
          <div class="date">2023-07-24</div>
        </div>
        <div class="contentBox">
          <div class="boxTitle text-truncate2 ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상
          </div>
          <div class="boxTitle text-truncate2 en">
            Won the Prime Minister's Award for Meritorious Contribution to Venture Startup Promotion 2022         
          </div>
          <div class="boxTxt text-truncate3 ko">
            금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
          </div>
          <div class="boxTxt text-truncate3 en">
            Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony.
          </div>
          <div class="date">2023-07-24</div>
        </div>
        <div class="contentBox">
          <div class="boxTitle text-truncate2 ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상
          </div>
          <div class="boxTitle text-truncate2 en">
            Won the Prime Minister's Award for Meritorious Contribution to Venture Startup Promotion 2022         
          </div>
          <div class="boxTxt text-truncate3 ko">
            금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
          </div>
          <div class="boxTxt text-truncate3 en">
            Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony.
          </div>
          <div class="date">2023-07-24</div>
        </div>
      </div>
      <div class="viewMore">
        <button>View More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .landingNews{
    @apply w-full text-center;
  }

  .sectionContent{
    @apply flex justify-center items-start gap-[40px] pt-[150px];
  }

  .contentBox{
    @apply w-[426px] p-[50px_36px_45px] rounded-[12px] shadow-[0px_2px_14px_rgba(0,0,0,0.15)] bg-[#fff];
  }

  .boxTitle{
    @apply w-full min-h-[70px] text-[#141414] text-[28px] font-normal leading-[35px] mb-[20px] text-left;
  }

  .boxTxt{
    @apply w-full min-h-[90px] text-[#141414] text-[20px] font-[300] leading-[30px] mb-[20px] text-left;
  }

  .date{
    @apply text-[#9395a9] text-[12px] font-[300] leading-[30px] text-left;
  }

  .viewMore{
    @apply w-full text-center mt-[80px];
  }

  .viewMore button{
    @apply w-[175px] h-[40px] leading-[40px] rounded-[30px] bg-[#f4f5f6] text-[#141414] text-[16px] font-normal;
  }
</style>
