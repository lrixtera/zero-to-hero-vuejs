const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
        };
    },
    methods:{
       
    },
    computed : {
        getCounterResult(){
            console.log("counter 1 çalıştı");
            return this.counter >= 5 ? 'BÜYÜK' :  'KÜÇÜK';
        },
        getCounter2Result(){
            console.log("counter 2 çalıştı");
            return this.counter2 >= 5 ? 'BÜYÜK' :  'KÜÇÜK';
        },
    },
    watch :{
        counter(newValue, oldValue){
            console.log("Counter", oldValue, "==>", newValue);
        },
        getCounterResult(newValue, oldValue){
            console.log("RESULT", oldValue, "==>", newValue);
        }
    },
  /*  methods:{
        inc(){
            this.counter++;
        },
        dec(){
            this.counter--; 
        },
    }*/
}).mount('#app');