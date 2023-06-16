<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else class="container">
      <h1>{{ product.title }}</h1>
      <div class="row">
        <div class="col-sm">
          <img class="img-thumbnail" :src="product.image" alt="Card image" />
        </div>
        <div class="col-sm col-right">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">цена</th>
                <td>{{ product.price }}</td>
              </tr>
              <tr>
                <th scope="row">рейтинг</th>
                <td>{{ product.rating.rate }}</td>
              </tr>
              <tr>
                <th scope="row">количество</th>
                <td>{{ product.rating.count }}</td>
              </tr>
            </tbody>
          </table>
          <div class="descr">{{ product.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['id']);
import { errored, loading, requestProduct, product } from '@/api';
import { onMounted } from 'vue';

const requestProd = () => {
  requestProduct('https://fakestoreapi.com/products/' + props.id);
};
onMounted(requestProd);
</script>

<style scoped>
.descr {
  margin-top: 1rem;
  margin-left: 1rem;
}
.col-right {
  margin-right: 4rem;
}
img {
  max-width: 70%;
  margin-left: 4rem;
}
h1 {
  margin: 2rem;
}
</style>
