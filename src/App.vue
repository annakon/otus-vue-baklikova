<script setup>
import { ref,onMounted} from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import axios from "axios";

let goods = ref();
let errored=ref();
let loading=ref(true);
onMounted(async () => {
    await axios
        .get('https://fakestoreapi.com/products')
        .then(response => (goods.value = response.data))
        .catch(error => {
          console.log(error);
          errored.value = true;
        })
        .finally(() => (loading.value = false));
})
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
  </header>
  <div>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
    <GoodsItem v-else v-for="g in goods"
                :key="g.id"
                :goods="g">
    </GoodsItem>
    </section>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
