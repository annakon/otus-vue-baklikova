<script setup>
import { ref,onMounted} from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import axios from "axios";
/*const goods = ref([
  {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
  {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}
])*/
let goods = ref();
let errored=ref();
let loading=true;
onMounted(() => {
  axios
      .get('https://fakestoreapi.com/products')
      .then(response => (goods = response.data.bpi))
      .catch(error => {
        console.log(error);
        errored = true;
      })
      .finally(() => (loading = false));
  /*fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => (goods=data))*/
  console.log(goods);
})
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    {{ goods }}
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
