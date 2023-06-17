<template>
  <Form>
    <h1>Войти</h1>
    <div class="mb-3 row">
      <label for="exampleInputEmail1" class="col-sm-2 col-form-label">логин</label>
      <div class="col-sm-8">
      <Field
        name="login"
        :rules="loginRules"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
      />
      <ErrorMessage name="login" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="exampleInputPassword1" class="col-sm-2 col-form-label">пароль</label>
      <div class="col-sm-8">
      <Field
        name="password"
        class="form-control"
        type="password"
        :rules="passwordRules"
        id="exampleInputPassword1"
      />
      <ErrorMessage name="password" />
    </div>
    <div class="mb-3">
      <router-link to="/" class="btn btn-primary">Войти</router-link>
    </div>
    </div>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { onBeforeRouteLeave} from 'vue-router'
const passwordRules = yup.string().required().min(8);
const loginRules = yup.string().required();

onBeforeRouteLeave((to, from) => {
  localStorage.setItem("productLogin", "1");
})
</script>

<style scoped>
span {
  display: block;
  font-size: 80%;
  margin-top: 0.25rem;
  color: #dc3545;
}
form {
  margin: 10rem;
  padding: 2rem;
  border: solid;
}
</style>
