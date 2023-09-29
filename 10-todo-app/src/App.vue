<template>
  <div class="container">
    <h3 class="text-center">
      ToDo App
    </h3>
    <hr class="my-2" />
    <AddSection :addItem="addItem" @addtodo="addItem" />
    <ListSection/>
  </div>
</template>
<script>  
import AddSection from "@/components/AddSection.vue";
import ListSection from "@/components/ListSection.vue"
export default {
  components: {
    AddSection,
    ListSection
  },
  created(){
    // setTimeout(() => {
    //   this.todoList = [
    //     { id: 1, text: "Bootcamp" },
    //     { id: 2, text: "Bootcamp" },
    //     { id: 3, text: "Bootcamp" },
    //     { id: 4, text: "Bootcamp" },
    //     { id: 5, text: "Bootcamp" },
    //     { id: 6, text: "Bootcamp" },
    //   ]
    // }, 2000);
  },
  data() {
    return {
      provideData: {
      todoList: [
        { id: 1, text: "Bootcamp" },
        { id: 2, text: "Bootcamp" },
        { id: 3, text: "Bootcamp" },
        { id: 4, text: "Bootcamp" },
        { id: 5, text: "Bootcamp" },
        { id: 6, text: "Bootcamp" },
      ],
    }
    }
  },
  provide(){
    return{
      provideData: this.provideData,
      deleteItem: this.deleteItem
    }
  },
  methods: {
    testEvent(data){
      alert(data);
    },
    deleteItem(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter((t) => t !== todoItem)
    },
    addItem(todo) {
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo
      })
    }
  }
}
</script>