<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div v-if="storeUser.isAdmin">
        <router-link to="/add" class="navbar-brand">Добавить товар</router-link>
      </div>
      <router-link to="/" class="navbar-brand">Просмотр списка</router-link>
      <router-link to="/cart" class="navbar-brand">Корзина</router-link>
      <search-form></search-form>
    </div>
  </nav>
</template>

<script setup>
import SearchForm from '@/components/search/searchForm.vue';
import { useUserStore } from '@/stores/user';

const storeUser = useUserStore();
</script>

<style scoped></style>
