<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <CorporateMain></CorporateMain>
    <CorporateContent></CorporateContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0, 
      selectedIndex: 0,
    }
  }
}
</script>
