const app = Vue.createApp({
    data(){
        return{
            search:"",
            itemList: ["kavun","karpuz","kelek","armut"],
            // filteredList: [],
        };
    },
    methods: {
        searchList(){
         // this.filteredList = this.itemList.filter((i) => i.includes(this.search));
        },
    },
    computed: {
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search));
        }
    }
}).mount("#app");