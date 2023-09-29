<template>
  <div class="container">
    <UserSection :provideData="userList" @new-item="userList.push($event)"/>
</div>
</template>
<script>
import UserSection from "@/components/UserSection"
export default {
  components:{
    UserSection,
  },
  data() {
    return {
      provideData: ["Test1","Test2","Test3","Test4"]
    }
  },
  provide(){
        return{
          userList: this.provideData.userList
        }
    }
}
</script>