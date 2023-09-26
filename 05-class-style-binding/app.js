const app = Vue.createApp({
    data(){
        return {
            showBorder: "false",
            redBG: "false",
            boxClass: "blue",
            bgColor: "",
        }
    },
    computed:{
        boxClasses(){
            return { border : this.showBorder, red: this.redBG}
        }
    },
}).mount("#app");