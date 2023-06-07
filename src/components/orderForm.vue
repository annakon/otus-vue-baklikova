<template>
  <form class="row g-3">
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
  </form>
</template>

<script setup>
import { ref } from 'vue';

const nameNew = ref('');
const email = ref('');
const address = ref('');
</script>

<style scoped>
* {
  margin: 0;
}
form {
  margin: 1rem;
}
</style>
