<template>
  <ul>
    <!-- <li v-for="todoItem in todoList"
      :key="todoItem.id"
      class="d-flex justify-content-between align-items-center">
      <span>{{ todoItem.text }} #{{ todoItem.id }}</span>
      <button class="sm red" @click="deleteItem(todoItem)">Sil</button>
    </li> -->
    <TodoListItem  v-for="todoItem in provideData.todoList"
      :key="todoItem.id" :item="todoItem" />
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue"
export default {
  inject: ["provideData"],
  //props: ["myData"],
  //    data(){
  //    return{
  //            myData:""
  //        }
  //    },
  // props:{
  //     myData: {
  //         type: String,
  //         required: false,
  //         default: ""
  //    }
  // },
  components: {
    TodoListItem
  }
}
</script>