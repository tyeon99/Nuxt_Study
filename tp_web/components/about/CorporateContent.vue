<template>
  <div class="corporateContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="contentTitle ko">
          데이터와 AI시대, <br>
          초지능형 과학적 의사결정을 지원하는 <br>
          지식기업
        </div>
        <div class="contentTitle en">
          ‘In the age of data and AI, knowledge <br>
          machines enable superintelligent <br>
          scientific decision-making’
        </div>
        <div class="contentTxt ko">
          투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 <br>
          기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 <br>
          글로벌 기업으로 성장해 나가겠습니다.
        </div>
        <div class="contentTxt en">
          We will grow into a globally competitive <br> 
          company by further developing Thinkpool's <br>
          unique technology in the fields of investment <br>
          finance and big data.
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong class="ko">회사명</strong>
            <strong class="en">Company Name</strong>
            <span class="ko">㈜ 씽크풀 (ThinkPool.co.Ltd.)</span>
            <span class="en">ThinkPool.co., Ltd.</span>
          </div>
          <div class="list">
            <strong class="ko">대표이사</strong>
            <strong class="en">C E O</strong>
            <span class="ko">김 동 진</span>
            <span class="en">Kim Dong-jin</span>
          </div>
          <div class="list">
            <strong class="ko">설립연월</strong>
            <strong class="en">Founded</strong>
            <span class="ko">1994년 1월</span>
            <span class="en">Jan. 1994</span>
          </div>
          <div class="list">
            <strong class="ko">자본금</strong>
            <strong class="en">Capital Stock</strong>
            <span class="ko">35.7억 원 [자본총계 170억원]</span>
            <span class="en">35.7 billion</span>
          </div>
          <div class="list">
            <strong class="ko">종업원수</strong>
            <strong class="en">Number of employees</strong>
            <span class="ko">71명</span>
            <span class="en">71</span>
          </div>
          <div class="list">
            <strong class="ko">사업분야</strong>
            <strong class="en">Business Area <br>/ Number of members</strong>
            <span class="ko">빅데이터ㆍAI  기반의 투자금융 부문등 컨텐츠 생산/ 알고리즘 </span>
            <span class="en">Produce content for big data, AI-powered investment banking, etc. / Algorithm development  / Build and operate platforms, decision support systems  /  600K members</span>
          </div>
          <div class="list">
            <strong class="ko">특허현황</strong>
            <strong class="en">Patents</strong>
            <span class="ko">등록 97건 출원 11건</span>
            <span class="en">Registered Patents 95, Patent applications 70 <br>( As of the end of 2022 )</span>
          </div>
          <div class="list">
            <strong class="ko">회사위치</strong>
            <strong class="en">Location</strong>
            <span class="ko">서울시 영등포구 국제금융로 70 15층 (여의도동 미원빌딩)</span>
            <span class="en">15F, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea(Yeouido-dong, Mi-won Building)</span>
          </div>
          <div class="list">
            <strong class="ko">기타</strong>
            <strong class="en">Others</strong>
            <span class="ko">기술벤처기업(스타벤처) 이노비즈 기업부설연구소</span>
            <span class="en">Tech startups (Star Ventures), Innobiz, Corporate Research Center (Selected as an ATC+ Excellent Company Research Center by the Ministry of Trade, Industry and Energy, AI Division)</span>
          </div>
        </div>
        <div class="date ko">기준일 : 2024.02</div>
        <div class="date en">Reference date : 02. 2024</div>
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
    @apply bottom-[-2px] left-[98px];
  }

  .contentTitle.en::after{
    @apply left-[360px];
  }

  .date{
    @apply text-[#999] text-[14px] font-normal leading-[18px] text-right;
  }
</style>
