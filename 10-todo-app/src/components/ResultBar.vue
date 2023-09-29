<template>
<!-- <small class="d-flex justify-content-end text-right green">{{ todoList.length }} tane todo var.</small> -->
<small class="d-flex justify-content-end text-right green">{{ itemCount }} tane todo var.</small>
        
    
</template>
<script>
export default{
    props:["itemCount"]
}
</script>