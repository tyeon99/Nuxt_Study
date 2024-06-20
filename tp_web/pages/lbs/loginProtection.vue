<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex" class="rassiBg"></CategoryNav>
    <LoginProtectionServices class="rassiBg"></LoginProtectionServices>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 2,
      selectedIndex: 12,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>