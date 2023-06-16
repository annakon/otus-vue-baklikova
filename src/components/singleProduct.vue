<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else class="container">
      <img class="card-img-top" :src="product.image" alt="Card image" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['id']);
import { errored, loading, requestProduct, product } from '@/api';
import { onMounted } from 'vue';

const requestProd=()=>{
  requestProduct("https://fakestoreapi.com/products/"+props.id);
}
onMounted(requestProd);
</script>

<style scoped></style>
