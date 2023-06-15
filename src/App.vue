<script setup>
import { computed, reactive, ref } from 'vue';
import { goods } from './api';
import SearchForm from '@/components/searchForm.vue';

const isAdd = ref(false);
const isOrder = ref(false);
const isFind = ref(false);
const forSearch = reactive([]);
const goodsList = computed(goodsToShow);
function goodsToShow() {
  return isFind.value
    ? goods.value.filter(
        (t) =>
          (t?.price === forSearch.value.price || typeof forSearch.value.price === 'undefined') &&
          t?.title.indexOf(forSearch.value.name) !== -1
      )
    : goods.value;
}

function setVisible(find, add, order) {
  isAdd.value = add;
  isFind.value = find;
  isOrder.value = order;
}
function findCard(findObj) {
  forSearch.value = findObj;
  setVisible(true, false, false);
}
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/add" class="navbar-brand">Добавить товар</router-link>
        <router-link to="/order" class="navbar-brand">Оформить заказ</router-link>
        <router-link to="/" class="navbar-brand">Просмотр списка</router-link>
        <search-form @find-card="findCard"></search-form>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
