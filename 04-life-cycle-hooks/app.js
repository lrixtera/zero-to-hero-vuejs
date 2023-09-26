const app = Vue.createApp({
    data(){
        return {title : "test başlığı",
    itemList: []}
    },
    beforeCreate(){console.log("before createÇalıştı");},
    created(){console.log("created Çalıştı",
    setTimeout(()=>{
        this.itemList = [1,2,3,4,5]
    },2000),
    setTimeout(()=>{
        this.title = "Bu yeni başlık gardaş"
    },4000)
    );},
   
    beforeMount(){console.log("before mountÇalıştı");},
    mounted(){console.log("mounted Çalıştı");},
    beforeUpdate(){console.log("beforeupdate Çalıştı");},
    updated(){console.log("updated Çalıştı");},
    beforeUnmount(){console.log("beforeunmount Çalıştı");},
    unmounted(){console.log("unmountedÇalıştı");},
});
app.mount("#app");

setTimeout(()=>{
    app.unmount();
},6000);