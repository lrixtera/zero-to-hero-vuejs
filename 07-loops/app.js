const app = Vue.createApp({
    data(){
        return{
            todoList: ["Todo 1","Todo 2", "Todo 3", "Todo 4 "],
        }
    },
    methods: {
        addTodo(){
            this.todoList.push($event.target.value);
        }
    },
}).mount("#app");