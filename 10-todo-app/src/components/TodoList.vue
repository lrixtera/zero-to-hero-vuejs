<template>
<ul>
      <!-- <li v-for="todoItem in todoList"
      :key="todoItem.id"
      class="d-flex justify-content-between align-items-center">
      <span>{{ todoItem.text }} #{{ todoItem.id }}</span>
      <button class="sm red" @click="deleteItem(todoItem)">Sil</button>
    </li> -->
    <TodoListItem @delete-todo-item="$emit('delete-todo-item',$event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue"
export default{
    props: ["myData"
    ],
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
    components:{
        TodoListItem
    }
}
</script>