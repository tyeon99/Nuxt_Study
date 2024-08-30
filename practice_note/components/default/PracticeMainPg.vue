<template>
  <div class="content">
    <div class="title">Practice Page</div>
    <div class="menu">
      <button @click="goLink('practice01')">Practice01</button>
      <button @click="goLink('practice02')">Practice02</button>
      <button @click="goLink('practice03')">Practice03</button>
      <button @click="goLink('practice04')">Practice04</button>
    </div>
  </div>
</template>

<script>
export default{
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.content{
  @apply w-full 
}
.title{
  @apply w-full leading-[200px] text-[50px] text-center bg-[#979797] text-[#fff]
}
.menu{
  @apply w-full flex flex-col;
}
.menu button{
  @apply w-full text-center bg-[#fff] border-b-[1px] border-[#979797] leading-[50px];
}
</style>