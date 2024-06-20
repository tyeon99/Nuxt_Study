<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex" class="rassiBg"></CategoryNav>
    <TpAiAlgorithms class="rassiBg"></TpAiAlgorithms>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 1,
      selectedIndex: 11,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>