<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex" class="rassiBg"></CategoryNav>
    <LandingRassi class="rassiBg"></LandingRassi>
    <pmsSection></pmsSection>
    <smsSection class="rassiBg"></smsSection>
    <tmsSection></tmsSection>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 1, 
      selectedIndex: 10,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>