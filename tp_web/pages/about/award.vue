<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <AwardMain></AwardMain>
    <AwardContent></AwardContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 5,
    }
  }
}
</script>
