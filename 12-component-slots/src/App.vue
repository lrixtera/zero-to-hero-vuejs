<template>
  <!-- <MeinModal :onSave="onSave" :title="'ModalTitle'" :content="content"/> -->
  <MeinModal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <!-- <template #content>
      <p class="text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione nobis consequatur doloribus molestias
        eligendi recusandae voluptatum tenetur, non aut dolorem iure laboriosam repellat maiores dignissimos adipisci
        incidunt tempora sint.</p>
    </template> -->
    <template v-slot:content>
      <p class="text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione nobis consequatur doloribus molestias
        eligendi recusandae voluptatum tenetur, non aut dolorem iure laboriosam repellat maiores dignissimos adipisci
        incidunt tempora sint.</p>
    </template>
    <template #default>
          Bu default.
    </template>
  </MeinModal>
</template>

<script>
import MeinModal from '@/components/MeinModal.vue'

export default {
  components: {
    MeinModal
  },
  data() {
    return {
      content: `<h3 class="text-red">Title</h3>`
    }
  },
  methods: {
    onSave() {
      alert("Saved");
    }
  }
}
</script>


