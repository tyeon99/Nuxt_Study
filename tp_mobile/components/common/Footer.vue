<template>
  <div class="mainFooter">

    <div class="footerLogo">
      <img src="~/assets/img/footerLogo.png" alt="footerLogo">
    </div>

    <div class="footerTxt">
      주식회사 씽크풀 대표이사  : 김동진 <br>
      서울특별시 영등포구 국제금융로 70, 15층<br>
      (여의도동, 미원빌딩)<br>
      대표번호 : 1666-6300 help@thinkpool.com<br>
      사업자등록번호 : 116-81-54775<br>
      Copyright ©2023 ThinkPool Co.,Ltd. <br>
      All Rights Reserved
    </div>

    <div class="siteSelect">
      <!-- <label for="select">Family Site</label> -->
      <button class="selectbox">

        <div class="selected-txt">
          Family Site
        </div>

        <div class="options">
          <button class="option-txt">사이트01</button>
          <button class="option-txt">사이트02</button>
          <button class="option-txt">사이트03</button>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 14L12 9L17 14" stroke="#A2A5BC"/>
        </svg>

      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'mainFooter',

  mounted() {
    const selectBox = document.querySelector('.selectbox');

    selectBox.addEventListener('click', () => {
      selectBox.classList.toggle('active');
    })
  }
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/footer';
</style>
