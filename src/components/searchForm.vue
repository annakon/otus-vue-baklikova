<template>
  <form class="d-flex">
    <input type="text" class="form-control me-2" v-model="nameFind" placeholder="Название" />
    <input type="number" class="form-control me-2" v-model.number="priceFind" placeholder="Цена" />
    <router-link to="/fff">Найти</router-link>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const nameFind = ref('');
const priceFind = ref();
</script>

<style scoped></style>
