<template>
        <li class="d-flex justify-content-between align-items-center">
        <span>{{ item.text }} # {{ item.id }}</span>
        <button @click="deleteItem(item)" class="sm red">Sil</button>
    </li>
</template>
<script>
export default{
    props: ["item"],
    inject: ["deleteItem"]
}
</script>