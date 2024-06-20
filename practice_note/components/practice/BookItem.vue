<template>
  <div class="BookItem">
    <div
      class="item"
      v-for="(book, idx) in books"
      :key="'book_' + idx"
    >
      <input
        type="checkbox"
        :checked="book.read"
        @change="toggleRead(book.id)"
        :id="'book_' + book.id"
      >
      <label :for="'book_' + book.id">{{ book.title }}</label>
    </div>
    <button @click="deleteChecked">삭제</button>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleRead(bookId) {
      this.$emit('toggle-read', bookId)
    },
    deleteChecked() {
      this.$emit('delete-books')
    }
  }
}
</script>

<style scoped>
.BookItem {
  @apply mt-[20px];
}
.item {
  @apply flex items-center gap-[10px] mb-[10px];
}
.item:last-child {
  @apply mb-0
}
input {
  @apply w-[15px] h-[15px];
}
button {
  @apply block mt-[2opx] border border-[#ccc] rounded-[6px] p-[2px_40px];
}
</style>
