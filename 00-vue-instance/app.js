const app = Vue.createApp({
    data(){
        return{
            title:"VueJS testing",
            content:"Lorem ipsum dolor sit amet",
            linkInfo:{
                title:"Tıklayınız...",
                target:"_blank",
                url:"https://www.google.com",
                alt:"link",
                
            },
            coords:{
                x:0,
                y:0
            },
            
        };
    },
    methods:{
        changeTitle(pTitle){
            this. title= pTitle;
        },
        updateCoords(message,event){
            this.changeTitle(`${event.x},${event.y }`)
           // console.log(message,event.x,event.y);
            this.coords={
                x:event.x,
                y:event.y
            }

        },
    }
}).mount("#app");