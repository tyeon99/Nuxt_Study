<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <MilestonesMain></MilestonesMain>
    <MilestonesContent02></MilestonesContent02>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 3,
    }
  }
}
</script>
