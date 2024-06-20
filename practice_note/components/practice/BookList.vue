<template>
  <div class="BookList">
    <div class="txt">도서 제목을 입력하세요.</div>
    <div>
      <input type="text" v-model="newBook" @keyup.enter="addBook">
      <button @click="addBook">추가</button>
    </div>
    <div>
      <label>
        <input type="radio" v-model="filter" value="all"> 전체
      </label>
      <label>
        <input type="radio" v-model="filter" value="read"> 읽음
      </label>
      <label>
        <input type="radio" v-model="filter" value="unread"> 안 읽음
      </label>
    </div>
    <BookItem
      :books="filteredBooks"
      @delete-books="deleteCheckedBooks"
      @toggle-read="toggleRead"
    />
  </div>
</template>

<script>
import BookItem from './BookItem.vue'

export default {
  components: {
    BookItem
  },
  data() {
    return {
      newBook: '',
      books: [],
      filter: 'all'
    }
  },
  computed: {
    filteredBooks() {
      if (this.filter === 'all') {
        return this.books
      } else if (this.filter === 'read') {
        return this.books.filter(book => book.read)
      } else if (this.filter === 'unread') {
        return this.books.filter(book => !book.read)
      }
      return ''
    }
  },
  methods: {
    addBook() {
      if (this.newBook.trim() === '') {
        alert('도서 제목을 입력하세요')
        return
      }
      const newBook = {
        id: this.books.length + 1,
        title: this.newBook,
        read: false
      }
      this.books.push(newBook)
      this.newBook = ''
    },
    deleteCheckedBooks() {
      this.books = this.books.filter(book => !book.read)
    },
    toggleRead(bookId) {
      const book = this.books.find(b => b.id === bookId)
      if (book) {
        book.read = !book.read
      }
    }
  }
}
</script>

<style scoped>
.BookList {
  @apply p-[20px] border border-[#ccc];
}
input[type="text"] {
  @apply my-[20px] border border-[#ccc] rounded-[8px] p-[2px_10px];
}
button {
  @apply ml-[5px] h-[30px] p-[0px_15px] bg-[#e2e2e2] rounded-[8px];
}
label{
  @apply mr-[10px];
}
</style>
