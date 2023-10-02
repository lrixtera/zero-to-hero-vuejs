<template>
  <MeinModal :onSave="onSave" :title="'ModalTitle'" :content="content"/>
</template>

<script>
import MeinModal from '@/components/MeinModal.vue'

export default {
  components: {
    MeinModal
  },
  data(){
    return{
      content: `<h3 class="text-red">Title</h3>`
    }
  },
  methods:{
    onSave(){
      alert("Saved");
    }
  }
}
</script>


