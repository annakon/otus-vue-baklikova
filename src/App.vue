<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import GoodsItem from '@/components/GoodsItem.vue';
import { requestGoods, goods, errored, loading } from './api';
import SearchForm from '@/components/searchForm.vue';
import NewGoods from '@/components/newGoods.vue';
import OrderForm from '@/components/orderForm.vue';

onMounted(requestGoods);

const goodsList = computed(goodsToShow);
const isFind = ref(false);
const forSearch = reactive([]);
const isAdd = ref(false);
const isOrder= ref(false);
function goodsToShow() {
  return isFind.value
    ? goods.value.filter(
        (t) =>
          (t?.price === forSearch.value.price || typeof forSearch.value.price === 'undefined') &&
          t?.title.indexOf(forSearch.value.name) !== -1
      )
    : goods.value;
}
function findCard(findObj) {
  isFind.value = true;
  forSearch.value = findObj;
  isAdd.value = false;
  isOrder.value=false;
}

function addGoods() {
  isAdd.value = true;
  isFind.value = false;
  isOrder.value=false;
}

function addOrder() {
  isAdd.value = false;
  isOrder.value=true;
  isFind.value = false;
}

function addNewCard(addObj) {
  let newObj = { category: 'new', image: '/public/favicon.ico', rating: { rate: 0, count: 0 } };
  newObj.id = goods.value.length + 1;
  newObj.title = addObj.name;
  newObj.price = addObj.price;
  newObj.description = addObj.description;
  goods.value.unshift(newObj);
}
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a href="#/add" class="navbar-brand" @click="addGoods">Добавить товар</a>
        <a href="#/order" class="navbar-brand" @click="addOrder">Оформить заказ</a>
        <search-form @find-card="findCard"></search-form>
      </div>
    </nav>
  </header>
  <div>
    <section v-if="isOrder">
      <orderForm></orderForm>
    </section>
    <section v-else>
      <section v-if="isAdd">
        <newGoods @add-card="addNewCard"></newGoods>
      </section>
      <section v-if="errored">
        <p>
          We're sorry, we're not able to retrieve this information at the moment, please try back
          later
        </p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <GoodsItem v-else v-for="item in goodsList" :key="item.id" :goods="item"> </GoodsItem>
      </section>
    </section>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
