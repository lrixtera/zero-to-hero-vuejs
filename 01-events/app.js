const app = Vue.createApp({
    data(){
        return{
            fullName:"Küpeli",
        };
    },
    methods: {
        updateValue(event){
            this.fullName = event.target.value;
        },
    },
}).mount("#app");