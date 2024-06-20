<template>
  <div class="TodoList">
    <div class="txt">오늘의 할 일을 입력해주세요.</div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo">
    <button @click="addTodo">추가</button>
    <TodoItem
      :todos="todos"
      @delectedTodo="delectedTodo"
    >
    </TodoItem>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data: () => ({
    newTodo: '',
    todos: []
  }),
  methods: {
    addTodo() {
      if(this.newTodo.trim() === '') {
        alert('오늘의 할 일을 입력해주세요.')
        return
      }
      const todo = {
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false
      }
      this.todos.push(todo)
      this.newTodo = ''
    },
    delectedTodo() {
      this.todos = this.todos.filter(todo => !todo.completed)
      // for(let i = this.todos.length - 1; i >= 0; i--){
      //   if(this.todos[i].completed) {
      //     this.todos.splice(i, 1)
      //   }
      // }
    }
  }
}
</script>

<style scoped>
.TodoList {
  @apply p-[20px] border border-[#ccc];
}
input[type="text"] {
  @apply mt-[20px] border border-[#ccc] rounded-[8px] p-[2px_10px];
}
button {
  @apply ml-[5px] h-[30px] p-[0px_15px] bg-[#e2e2e2] rounded-[8px];
}
</style>
