<template>
  <Form class="row g-3">
    <div class="col-md-6">
      <label for="nameGoods">Название товара</label>
      <input type="text" class="form-control" id="nameGoods" v-model="nameNew" />
    </div>
    <div class="col-md-3">
      <label for="priceGoods">Цена</label>
      <field
        name="price"
        type="number"
        class="form-control"
        id="priceGoods"
        v-model.number="priceNew"
        :rules="priceRules"
      />
      <ErrorMessage name="price" />
    </div>
    <div class="col-12">
      <label for="description" class="form-label">Описание</label>
      <textarea class="form-control" rows="3" id="description" v-model="descriptionNew"> </textarea>
    </div>
    <div class="col-12">
      <button @click="addNew" class="btn btn-primary">Добавить</button>
    </div>
  </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const nameNew = ref('');
const descriptionNew = ref('');
const priceNew = ref();
const emit = defineEmits();
const priceRules = yup.number().required().positive();

function addNew(event) {
  emit('add-card', {
    name: nameNew.value,
    price: priceNew.value,
    description: descriptionNew.value
  });
  nameNew.value = '';
  priceNew.value = '';
  descriptionNew.value = '';
}
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
button {
  margin-top: 0.5rem;
}
</style>
