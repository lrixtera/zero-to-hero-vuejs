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
            
        };
    },
}).mount("#app");