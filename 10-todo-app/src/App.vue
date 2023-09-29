<template>
  <div class="container">
    <h3 class="text-center">
      ToDo App
    </h3>
    <hr class="my-2" />
    <AddSection :addItem="addItem" @addtodo="addItem" />
    <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length" />
  </div>
</template>
<script>  
import AddSection from "@/components/AddSection.vue";
import TodoList from "@/components/TodoList.vue";
import ResultBar from "@/components/ResultBar.vue";
export default {
  components: {
    AddSection,
    TodoList,
    ResultBar,
  },
  created(){
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp" },
        { id: 2, text: "Bootcamp" },
        { id: 3, text: "Bootcamp" },
        { id: 4, text: "Bootcamp" },
        { id: 5, text: "Bootcamp" },
        { id: 6, text: "Bootcamp" },
      ]
    }, 2000);
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    testEvent(data){
      alert(data);
    },
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((t) => t !== todoItem)
    },
    addItem(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo
      })
    }
  }
}
</script>