<template>
  <form class="row g-3" @submit.prevent="onSubmit">
    <div class="col-md-8">
      <label for="nameGoods">ФИО</label>
      <input type="text" class="form-control" id="nameGoods" v-model="nameNew" />
    </div>
    <div class="col-md-4">
      <label for="email">e-mail</label>
      <input type="text" class="form-control" id="email" v-model="email" />
    </div>
    <div class="col-12">
      <label for="address">Aдрес</label>
      <input type="text" class="form-control" id="address" v-model="address" />
    </div>
    <div class="col-12 my-1">
      <div class="form-check mb-2 mr-sm-2">
        <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
        <label class="form-check-label" for="inlineFormCheck"> согласен с правилами обработки заказа </label>
      </div>
      <button type="submit" class="btn btn-primary">Оформить</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const nameNew = ref('');
const email = ref('');
const address = ref('');

function onSubmit() {
  console.log('Submitted');
}
</script>

<style scoped>
* {
  margin: 0;
}
form {
  margin: 1rem;
}
</style>
