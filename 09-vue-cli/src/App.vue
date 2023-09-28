<script>
import newCounterItem from "@/components/counterItem";
export default {
  components: {
    counterItem: newCounterItem,
  }
}

</script>

<template>
  <app-header />
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugun component ve cli konularini goruyoruz</p>
  </div>
  <counterItem></counterItem>
  <counter-item></counter-item>
  <counterItem />
</template>

