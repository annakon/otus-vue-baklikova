<template>
  <Form class="row g-3" @submit="onSubmit" :validation-schema="schema">
    <div class="col-md-8">
      <label for="nameGoods">ФИО</label>
      <field name="FIO" type="text" class="form-control" id="nameGoods" v-model="nameNew" />
    </div>
    <div class="col-md-4">
      <label for="email">e-mail</label>
      <field name="email" type="email" class="form-control" id="email" v-model="email" />
      <ErrorMessage name="email" />
    </div>
    <div class="col-12">
      <label for="address">Aдрес</label>
      <field name="address" type="text" class="form-control" id="address" v-model="address" />
    </div>
    <div class="col-12 my-1">
      <div class="form-check mb-2 mr-sm-2">
        <field
          value="Agree"
          name="check"
          class="form-check-input"
          type="checkbox"
          id="inlineFormCheck"
        />
        <label class="form-check-label" for="inlineFormCheck">
          Согласен с правилами обработки заказа
        </label>
        <ErrorMessage name="check" />
      </div>
      <button type="submit" class="btn btn-primary">Оформить</button>
    </div>
  </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { message, saveOrder } from '@/api';

const nameNew = ref('');
const email = ref('');
const address = ref('');

function onSubmit(values) {
  console.log(values);
  saveOrder(values);
}

const schema = {
  check: (value) => {
    if (value && value.length) {
      return true;
    }

    return 'This field is required';
  },
  email: (value) => {
    if (!value) {
      return 'This field is required';
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return 'This field must be a valid email';
    }
    return true;
  }
};
</script>

<style scoped>
* {
  margin: 0;
}
form {
  margin: 1rem;
}
span {
  display: block;
  font-size: 80%;
  margin-top: 0.25rem;
  color: #dc3545;
}
</style>
