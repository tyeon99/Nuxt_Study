<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <WelfareMain></WelfareMain>
    <WelfareContent></WelfareContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 7,
    }
  }
}
</script>
