<template>
  <div class="row">
    <div class="col-sm">
      <img class="img-thumbnail" :src="props.cart.image" alt="Card image" />
    </div>
    <div class="col-sm">
      <h3>{{ props.cart.price }}</h3>
      <p>{{ props.cart.title }}</p>
    </div>
    <div class="col-sm">В корзине: {{ props.cart.quantity }}</div>
  </div>
</template>

<script setup>
const props = defineProps(['cart']);
</script>

<style scoped></style>
