<template>
  <div class="card">
    <img class="card-img-top" :src="props.goods.image" alt="Card image">
   <div class="cardBody">
    <h5 class="card-title">
      {{ props.goods.title }}
    </h5>
     <h6 class="card-subtitle mb-2 text-muted">
       {{ props.goods.price }}
     </h6>
     <p class="card-text">
       {{ props.goods.description }}
     </p>
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
