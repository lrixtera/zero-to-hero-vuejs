<template>
        <button @click="$emit('new-item', new Date().getTime())">set data</button>
</template>
<script>
export default{
    
}
</script>