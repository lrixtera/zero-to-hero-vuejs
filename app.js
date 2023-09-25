Vue.createApp({

})
.component('click-counter', {
       template: '<button @click="count++">{{count}}</button>',
    data(){
        return{
            count:1
        }
    }
})

.mount('#app')