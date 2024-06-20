<template>
  <div>
    <div class="if" v-for="(option, idx) in options" :key="'if_' + idx">
      <span v-if="selectValue === option.value"> if조건문 {{ option.value }}번 </span>
    </div>
    <button @click="confirmEmit">확정</button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    selectValue: {
      type: [Number, null],
      default: null
    },
    computedScore: {
      type: [String, null],
      default: null
    }
  },
  methods: {
    confirmEmit() {
      this.$emit('confirmBtn', this.computedScore)
    }
  }
}
</script>

<style scoped>
button{
  @apply p-[5px_15px] leading-[30px] bg-[#f2f2f2] rounded-[12px];
}
</style>