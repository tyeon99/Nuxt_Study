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

    <dropdownNav :dropdown-id="'ddwnMenu1'" :menu-items="menuItems1"/>

  </div>
</template>

<script>
import dropdownNav from '@/components/common/dropdownNav.vue'

export default {
  components: {
    dropdownNav,
  },

  data() {
    return {      
      menuItems1: [
        { to: '/menu/corporateOverview', ko: '회사개요', en: 'Corporate Overview' },
        { to: '/menu/ceoMessage', ko: 'CEO메시지', en: 'CEO Message' },
        { to: '/menu/ourVision', ko: '비전', en: 'VISION' },
        { to: '/menu/history01', ko: '연혁', en: 'History' },
        { to: '/menu/contact', ko: '오시는길', en: 'Contact' },
        // ... 다른 메뉴 아이템들
      ],
    }
  },
  mounted() {
    const currents = document.querySelectorAll('.current')
    const changes = document.querySelectorAll('.change')
    currents.forEach((current) => {
      current.addEventListener('click', () => {
        current.parentElement
          .querySelector('.sub-navBar')
          .classList.toggle('active')
      })
    })
    changes.forEach((change) => {
      change.addEventListener('click', () => {
        change.parentElement.classList.toggle('active')
      })
    })
  },
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/navigation';
</style>