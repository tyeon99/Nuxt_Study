<template>
  <div class="PatentContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="contentTitle ko">
          씽크풀은 총 <span>97</span>건의 등록특허와 <br>
          <span>11</span>건의 특허출원을 보유하고 <br>
          있습니다.
        </div>
        <div class="contentTitle en">
          ThinkPool has a total of <br>
          <span>97</span> registered patents and <br>
          <span>11</span> patent applications. 
        </div>
        <div class="contentImg">
          <img src="~/assets/img/patentImg2.png" alt="">
          <div class="detail ko">특허경영대상 수상</div>
          <div class="detail en">Patent Management Award Winner</div>
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong>RASSI</strong>
            <span class="ko">
              ㆍ인공지능 기반의 종목연관 키워드 결정방법 및 그 시스템 <br>
              ㆍ주문전략 제공방법 및 그 시스템<br>
              ㆍ지능형 이벤트 정보 제공방법 및 그 시스템<br>
              ㆍ혼합 포트폴리오 관리 시스템 및 그 제공방법 <br>
              ㆍ투자 어드바이스 제공 방법 및 투자 어드바이스 제공 서버
            </span>
            <span class="en">
              ㆍMethod for determining keywords related to stocks based on artificial intelligence and its system <br>
              ㆍOrder strategy delivery methods and systems <br>
              ㆍMethods and systems for providing intelligent event information <br>
              ㆍBlended portfolio management systems and how they are delivered  <br>
              ㆍHow investment advice is delivered and where it is delivered 
            </span>
          </div>
          <div class="list">
            <strong class="ko">로그인도용방지</strong>
            <strong class="en">Login Abuse Prevention System </strong>
            <span class="ko">
              ㆍ지능형 로그인 인증 시스템 및 그 방법 <br>
              ㆍ스마트폰 도용방지 서비스 방법 및 시스템<br>
              ㆍ위치기반의 서비스 보안 시스템 및 그 방법
            </span>
            <span class="en">
              ㆍIntelligent login authentication systems and how they work <br>
              ㆍSmartphone anti-theft service methods and systems <br>
              ㆍServices security systems for location devices and how they work 
            </span>
          </div>
          <div class="list">
            <strong>RMS</strong>
            <span class="ko">
              ㆍ온라인 주식 거래 및 대출을 위한 실시간 리스크 관리/통제 시스템 및 그 방법<br>
              ㆍ반대매매 관리 시스템, 계좌운영 시스템 및 그 방법
            </span>
            <span class="en">
              ㆍReal-time risk management/control system for online stock trading and lending, and method thereof  <br>
              ㆍCountertrade management system, account management system, and method thereof 
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
  .categoryContent{
    @apply !gap-[200px];
  }

  .contentLeft{
    @apply gap-[100px];
  }

  .contentTitle::before{
    @apply left-[-20px] top-[-12px];
  }

  .contentTitle::after{
    @apply bottom-[-2px] left-[98px];
  }

  .contentTitle.en::after{
    @apply left-[310px];
  }

  .contentTitle span{
    @apply text-[#5368FF];
  }

  .contentImg img{
    @apply w-[511px];
  }

  .detail{
    @apply text-center mt-[20px] text-[#9395A1] text-[16px] font-normal leading-[18px];
  }

  .contentRight{
    @apply mt-[83px] w-auto;
  }

  .contentList{
    @apply border-none m-0
  }

  .list{
    @apply flex-col !items-start !gap-[20px] border-none;
  }

  .list strong{
    @apply !text-[20px];
  }

  .list span{
    @apply !text-[#444] text-[18px] font-normal !leading-[30px];
  }
</style>
