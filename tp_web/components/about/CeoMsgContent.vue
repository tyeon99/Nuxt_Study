<template>
  <div class="ceoMsgContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="contentTitle ko">
          안녕하세요, <br>
          씽크풀 대표이사 <br>
          김동진입니다.
        </div>
        <div class="contentTitle en">
          Hello, I'm Dongjin Kim, <br>
          CEO of Thinkpool. 
        </div>
        <div class="contentTxt ko">
          투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 <br>
          기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 <br>
          글로벌 기업으로 성장해 나가겠습니다.
        </div>
        <div class="contentTxt en">
          We will grow into a globally competitive <br>
          company by further developing <br>
          Thinkpool's unique technology in the <br>
          fields of investment banking and big data. 
        </div>
        <div class="name ko">
          씽크풀 대표이사 <strong>김동진</strong>
        </div>
        <div class="name en">
          Thinkpool CEO <strong>Dongjin Kim</strong>
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong class="ko">주요경력</strong>
            <strong class="en">Career Highlights</strong>
            <span class="ko">한국은행, 은행감독원</span>
            <span class="en">Bank of Korea, Banking Supervision</span>
          </div>
          <div class="list">
            <strong class="ko">방송활동</strong>
            <strong class="en">Broadcast Activity </strong>
            <span class="ko"> &lt;손에 잡히는 경제&gt; 등 고정 게스트 (1995~1999 MBC, KBS, SBS, CBS 등)</span>
            <span class="en">Permanent guests such as 'economy in your hands' <br>(1995~1999 MBC, KBS, SBS, CBS, etc.) </span>
          </div>
          <div class="list">
            <strong class="ko">사업분야</strong>
            <strong class="en">Major Awards </strong>
            <span class="ko">
              - 2022년 국무총리 표창장 (벤처창업진흥 유공포상) <br>
              - 2016년 특허경영대상 특허청장 표창장 (특허경영 금상) <br>
              - 2013년 산업통상자원부장관 표창장 (벤처활성화 유공포상) <br>
              - 2013년 미래창조과학부장관 표창장 (인터넷 대상 – 기술선도부문)
            </span>
            <span class="en">
              - Prime Minister's Citation 2022 (Meritorious Achievement Award for Venture     Startup Promotion) <br>
              - Patent Commissioner's Citation for the 2016 Patent Management Award (Gold Medal for Patent Management) <br>
              - 2013 Minister of Trade, Industry and Energy Citation (Meritorious Award for Venture Activation) <br>
              - 2013 Minister of Science, ICT and Future Planning Award (Internet Award - Technology Leading) 
            </span>
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
  .contentTitle::before{
    @apply left-[-20px] top-[-12px];
  }

  .contentTitle::after{
    @apply bottom-[-2px] left-[160px];
  }

  .contentTitle.en::after{
    @apply left-[240px];
  }

  .name{
    @apply text-[#444] text-[20px] font-normal leading-[30px];
  }

  .name strong{
    @apply inline-block ml-[4px] text-[24px] font-bold;
  }

  .list{
    @apply !p-[30px_20px] flex flex-col !gap-[30px] !items-start;
  }

  .list span{
    @apply !leading-[40px];
  }

  .date{
    @apply text-[#999] text-[14px] font-normal leading-[18px] text-right;
  }
</style>
