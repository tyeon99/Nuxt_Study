<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <PersonnelContent></PersonnelContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 4,
      selectedIndex: 16,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>