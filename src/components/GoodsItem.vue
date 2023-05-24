<template>
  <div class="card">
    <img class="card-img-top" :src="props.goods.image" alt="Card image">
   <div class="cardBody">
    <h5 class="card-title">
      {{ props.goods.title }}
    </h5>
   </div>
  </div>
</template>

<script setup>

const props = defineProps(['goods']);

</script>

<style scoped>
  img {
    max-width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
