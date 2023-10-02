<template>
  <div class="container">
    <UserSection />
  </div>
</template>
<script>
import UserSection from "@/components/UserSection"
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: { 
        userList: ["Test1", "Test2", "Test3", "Test4"] }
    }
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem
    }
  },
  methods:{
    newItem(item){
      this.provideData.userList.push(item)
    }
  }
}
</script>