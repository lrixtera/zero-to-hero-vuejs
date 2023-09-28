<template>
  <div class="container">
    <h3 class="text-center">
      ToDo App
    </h3>
    <hr/>
    <input @keydown.enter="addItem" type="text" id="todoText" placeholder="Bir seyler yaziniz...">
    <ul>
      <li v-for="todoItem in todoList"
      :key="todoItem.id"
      class="d-flex justify-content-between align-items-center">
      <span>{{ todoItem.text }} #{{ todoItem.id }}</span>
      <button class="sm red" @click="deleteItem(todoItem)">Sil</button>
      </li>
      
    </ul>
    <small class="d-flex justify-content-end text-right green">{{ todoList.length }} tane todo var.</small>
  </div>
</template>
<script>
export default{
  data(){
    return{
      todoList:[
        {id: 1, text: "Bootcamp" },
        {id: 2, text: "Bootcamp" },
        {id: 3, text: "Bootcamp" },
        {id: 4, text: "Bootcamp" },
        {id: 5, text: "Bootcamp" },
        {id: 6, text: "Bootcamp" },
      ]
    }
  },  
  methods:{
    deleteItem(todoItem){
      this.todoList = this.todoList.filter((t) => t !== todoItem)
    },
    addItem(event){
     this.todoList.push({
      id: new Date().getTime(),
      text: event.target.value
     })
    }
  }
}
</script>