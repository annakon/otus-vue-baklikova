<script setup>
import {onMounted, reactive, ref} from 'vue';
import {goods, requestGoods} from './api';
import SearchForm from '@/components/searchForm.vue';
import NewGoods from '@/components/newGoods.vue';
import OrderForm from '@/components/orderForm.vue';
import Display from "@/components/display.vue";

onMounted(requestGoods);

const isAdd = ref(false);
const isOrder = ref(false);
const isFind = ref(false);
const forSearch = reactive([]);

function setVisible(find, add, order) {
  isAdd.value = add;
  isFind.value = find;
  isOrder.value = order;
}
function findCard(findObj) {
  forSearch.value = findObj;
  setVisible(true, false, false);
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
        <a href="#/add" class="navbar-brand" @click="() => setVisible(false, true, false)"
          >Добавить товар</a
        >
        <a href="#/order" class="navbar-brand" @click="() => setVisible(false, false, true)"
          >Оформить заказ</a
        >
        <a href="#/main" class="navbar-brand" @click="() => setVisible(false, false, false)"
          >Просмотр списка</a
        >
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
      <display :is-find="isFind" :for-search="forSearch"></display>
    </section>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
