import axios from 'axios';
import { ref } from 'vue';

const goods = ref();
const errored = ref();
const loading = ref(true);
const request = 'https://fakestoreapi.com/products';
const product = ref();
export const useApi = () => {
  async function requestGoods() {
    await axios
      .get(request)
      .then((response) => (goods.value = response.data))
      .catch((error) => {
        console.log(error);
        errored.value = true;
      })
      .finally(() => (loading.value = false));
  }

  async function requestProduct(requestOneProduct) {
    await axios
      .get(requestOneProduct)
      .then((response) => (product.value = response.data))
      .catch((error) => {
        console.log(error);
        errored.value = true;
      })
      .finally(() => (loading.value = false));
  }

  async function saveOrder(orderData, callback) {
    await fetch('https://reqbin.com/echo/post/json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)))
      .then(callback)
      .catch((error) => {
        alert(error);
      });
  }
  return {
    goods,
    errored,
    loading,
    product,
    requestProduct,
    requestGoods,
    saveOrder
  };
};
