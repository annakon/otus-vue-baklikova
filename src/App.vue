<script setup>
import Login from '@/components/login/login.vue';
import Navigation from "@/components/navigation/navigation.vue";
</script>

<template>
  <div v-if="($route.name !== 'login') & ($route.name !== 'order')">
    <header>
      <Login></Login>
      <h1>Cписок товаров</h1>
      <navigation></navigation>
    </header>
    <router-view />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
