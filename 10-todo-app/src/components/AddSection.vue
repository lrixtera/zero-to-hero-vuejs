<template>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="addItem(todoText)" type="text" id="todoText" placeholder="Bir seyler yaziniz...">
</template>
<script>
export default{
    props:{
        addItem:{
            type: Function,
            required: true
        }
    },
    data(){
        return{
            todoText:null,
        }
    },
    methods: {
       // addNewTodo(){
       //     this.$emit("addtodo",this.todoText)
       //     this.todoText = null;
     //   }
    },
   emits:{
        addtodo: null,
    }
}
</script>