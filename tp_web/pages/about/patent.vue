<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <PatentMain></PatentMain>
    <PatentContent></PatentContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 4,
    }
  }
}
</script>
