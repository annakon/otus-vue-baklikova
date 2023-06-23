<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-1">
        <div v-if="storeUser.isNotAuthorized">
           <router-link to="login">Войти</router-link>
        </div>
        <div v-else>
          {{storeUser.login}}
          <router-link to="login">Выйти</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";

const storeUser = useUserStore();
storeUser.setUser();
</script>

<style scoped></style>
