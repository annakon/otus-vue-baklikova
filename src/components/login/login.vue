<template>
        <div class="login" v-if="storeUser.isNotAuthorized">
           <router-link to="login">Войти</router-link>
        </div>
        <div class="login" v-else>
          <h5>{{storeUser.login}}</h5>
          <router-link to="login">Выйти</router-link>
        </div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";

const storeUser = useUserStore();
storeUser.setUser();
</script>

<style scoped>
.login {
  text-align: right;
}
</style>
