import axios from 'axios';
import { ref } from 'vue';

export let goods = ref();
export let errored = ref();
export let loading = ref(true);
const request = 'https://fakestoreapi.com/products';
export let message = ref('');

export async function requestGoods() {
  await axios
    .get(request)
    .then((response) => (goods.value = response.data))
    .catch((error) => {
      console.log(error);
      errored.value = true;
    })
    .finally(() => (loading.value = false));
}

export const saveOrder = (orderData) => {
  fetch('https://reqbin.com/echo/post/json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
    .then(() => (message.value = 'запрос успешно отправлен'))
    .catch((error) => {
      message.value = error;
    });
};
