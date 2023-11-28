<template>
  <div class="mainHeader">

      <div class="headerWrapper">

        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="25" viewBox="0 0 44 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5283 0V25H31.6038V15.566H37.7359C40.0944 15.566 43.6321 13.6792 43.868 9.19811V6.13208C43.868 4.00943 42.217 0 37.2642 0H24.5283ZM31.6039 4.9528V10.3773H34.9058C35.4561 10.3773 36.7926 9.66978 37.0284 8.01884V7.54714C37.02 7.49656 37.0134 7.43243 37.0057 7.35765C36.9414 6.73497 36.8008 5.37392 34.9058 4.9528H31.6039Z" fill="#5368FF"/>
            <path d="M0 6.13208V0H21.2264V6.13208H14.151V25H7.07548V6.13208H0Z" fill="black"/>
          </svg>
        </div>

        <div class="menu">
          <button type="button" data-bs-toggle="offcanvas" data-bs-target="#sideMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19 1L1 1" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 10L1 10" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 19L1 19" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

      </div>

      <div class="offcanvas offcanvas-end" id="sideMenu">

        <div class="offcanvas-header">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="25" viewBox="0 0 44 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5283 0V25H31.6038V15.566H37.7359C40.0944 15.566 43.6321 13.6792 43.868 9.19811V6.13208C43.868 4.00943 42.217 0 37.2642 0H24.5283ZM31.6039 4.9528V10.3773H34.9058C35.4561 10.3773 36.7926 9.66978 37.0284 8.01884V7.54714C37.02 7.49656 37.0134 7.43243 37.0057 7.35765C36.9414 6.73497 36.8008 5.37392 34.9058 4.9528H31.6039Z" fill="#5368FF"/>
              <path d="M0 6.13208V0H21.2264V6.13208H14.151V25H7.07548V6.13208H0Z" fill="black"/>
            </svg>
          </div>
          <div class="closeBtn">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          </div>
        <div class="offcanvas-body">
          <div class="language">
            <div>
              <button class="active">KOR</button>
              <button>ENG</button>
            </div>
          </div>
          <div class="menu-guide">
            <div class="accordion">
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiOne" aria-expanded="true" aria-controls="collapseOne">
                  기업소개
                </button>
                <div id="guiOne" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li>회사개요</li>
                      <li>CEO메시지</li>
                      <li>비전</li>
                      <li>연혁</li>
                      <li>오시는 길</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiTwo" aria-expanded="true" aria-controls="collapseTwo">
                  사업영역
                </button>
                <div id="guiTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul class="subAcc">
                      <span>AI증권사 Part</span>
                      <li>R1. AI-기자</li>
                      <li>R2. AI-애널리스트</li>
                      <li>R3. AI-PMS(Advisor) 시스템</li>
                      <li>R4. AI-Trader</li>
                    </ul>
                    <div class="pt-[15px] bg-[#F4F5F6]"></div>
                    <ul class="subAcc">
                      <span>LBS Part</span>
                      <li>위치기반 로그인 도용방지 시스템</li>
                      <li>안심키퍼서비스</li>
                    </ul>
                    <div class="pt-[15px] bg-[#F4F5F6]"></div>
                    <ul class="subAcc">
                      <span>RM Part</span>
                      <li>RMS(자동대출)통제시스템</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiThree" aria-expanded="true" aria-controls="collapseThree">
                  혁신R&D
                </button>
                <div id="guiThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li>국가R&D</li>
                      <li>특허</li>
                      <li>주요 수상</li>
                      <li>주요 인증</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiFour" aria-expanded="true" aria-controls="collapseFour">
                  홍보센터
                </button>
                <div id="guiFour" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li>공지사항</li>
                      <li>News</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiFive" aria-expanded="true" aria-controls="collapseFive">
                  IR
                </button>
                <div id="guiFive" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li>IR 바로 가기</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target="#guiSix" aria-expanded="true" aria-controls="collapseSix">
                  채용정보
                </button>
                <div id="guiSix" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li>복지제도</li>
                      <li>채용공고</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: 'mainHeader',
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/header';
</style>
