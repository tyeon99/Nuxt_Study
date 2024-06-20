<template>
  <div class="TodoItem">
    <div
      class="itemList"
      v-for="(todo, idx) in todos"
      :key="'item_' + idx"
    >
      <input
        type="checkbox"
        :id="todo.id"
        v-model="todo.completed"
      >
      <label :for="todo.id">{{ todo.title }}</label>
    </div>
    <button @click="delectedTodo">삭제</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    delectedTodo() {
      this.$emit('delectedTodo')
    }
  }
}
</script>

<style scoped>
.TodoItem {
  @apply mt-[20px];
}
.itemList {
  @apply flex justify-normal items-center gap-[10px] mb-[10px];
}
.itemList:last-child {
  @apply mb-0
}
input {
  @apply w-[15px] h-[15px] mt-[2px];
}
button {
  @apply block mt-[20px] border border-[#ccc] rounded-[6px] p-[2px_40px];
}
</style>
