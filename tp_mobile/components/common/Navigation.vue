<template>
  <div class="nav">

    <button class="home">
      <nuxt-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
          <path d="M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z" fill="black"/>
        </svg>
      </nuxt-link>
    </button>

    <div class="navBar">
      <div>기업소개</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 10L12 15L7 10" stroke="#D9D9D9"/>
        </svg>
      </div>
    </div>

    <button class="navBar" @click="dorpDown">
      <div>회사개요</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 10L12 15L7 10" stroke="#D9D9D9"/>
        </svg>
      </div>

      <div class="sub-navBar" v-if="showDropDown">
        <button class="active"><nuxt-link to="/menu/corporateOverview">회사개요</nuxt-link></button>
        <button><nuxt-link to="/menu/ceoMessage">CEO메시지</nuxt-link></button>
        <button><nuxt-link to="/menu/ourVision">비전</nuxt-link></button>
        <button><nuxt-link to="/menu/history01">연혁</nuxt-link></button>
        <button><nuxt-link to="/menu/contact">오시는 길</nuxt-link></button>
      </div>

    </button>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  // mounted() {
  //   const dropDown = document.querySelector('.dropDown');

  //   dropDown.addEventListener('click', () => {
  //     dropDown.classList.toggle('active');
  //   })
  // }

  data() {
    return {
      showDropDown: false,
    }
  },
  methods: {
    dorpDown() {
      this.showDropDown = !this.showDropDown
    },
  },  
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/navigation';
</style>