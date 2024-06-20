<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <OurVisionMain></OurVisionMain>
    <OurVisionContent></OurVisionContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 2,
    }
  }
}
</script>
