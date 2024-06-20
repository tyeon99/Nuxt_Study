<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <CertificationMain></CertificationMain>
    <CertificationContent></CertificationContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 0,
      selectedIndex: 6,
    }
  }
}
</script>
