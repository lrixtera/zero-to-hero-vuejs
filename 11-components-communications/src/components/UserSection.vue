<template>
    <div>
    <ListSection/>
    <AddSection @new-item="$emut('new-item', $event)"/>
    
    </div>
</template>

<script>
import ListSection from "@/components/ListSection"
import AddSection from "@/components/AddSection"
export default{
    
   // props:["userList"],
    emits:["new-item"],
    components:{
        ListSection,
        AddSection
    },
}
</script>