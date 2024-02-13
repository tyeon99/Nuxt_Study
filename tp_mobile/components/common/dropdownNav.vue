<template>
  <div class="dropdownNav" :id="dropdownId">

    <button class="navBar current" @click="dropDown">
      <div v-html="currentContent"></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 10L12 15L7 10" stroke="#D9D9D9"/>
        </svg>
      </div>

      <div class="sub-navBar" v-if="showDropDown">
        <nuxt-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.to"
        class="change"
        :class="{ active: isActive(item.to) }"
        @click="handleLinkClick(item)"
        >
          {{ item.ko }}
        </nuxt-link>
      </div>

    </button>
  </div>
</template>

<script>
export default {
  props: {
    dropdownId: {
      type: String,
      default: 'defaultDropdownId', // 적절한 기본값으로 변경
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      showDropDown: false,
      currentContent: '', // 현재 페이지에 대한 내용을 담을 변수
    }
  },
  watch: {
    $route(to) {
      // 라우트가 변경될 때마다 currentContent 업데이트
      this.updateCurrentContent()
    },
  },
  mounted() {
    // 초기 경로에 따라 currentContent를 설정합니다.
    this.updateCurrentContent()
  },
  methods: {
    dropDown() {
      this.showDropDown = !this.showDropDown
    },

    isActive(path) {
      return this.$route.path.startsWith(path)
    },
    updateCurrentContent(item) {
      // 클릭한 메뉴 항목이 주어진 경우 해당 내용을 사용하고, 그렇지 않으면 현재 경로에 대한 내용을 설정합니다.
      const activeLink =
        item || this.menuItems.find((item) => this.isActive(item.to))

      if (activeLink) {
        // 여기서 span을 포함한 HTML을 currentContent에 설정합니다.
        this.currentContent = `<span class="ko">${activeLink.ko}</span>`
      }
    },
    handleLinkClick(item) {
      this.updateCurrentContent(item)
    },
  },  
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/navigation';
</style>