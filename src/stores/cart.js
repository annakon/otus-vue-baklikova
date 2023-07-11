import {computed, ref} from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  function addToCart(product) {
    let item = cart.value.find((i) => i.id === product.id);

    if (item) {
      item.quantity++;
      alert('В корзине: ' + item.quantity);
    } else {
      cart.value.push({ ...product, quantity: 1 });
      alert('В корзине: 1');
    }
  }

  function clearCart() {
    cart.value = [];
  }

  const totalSum = computed(() => {
    return cart.value.map(i =>  i.price * i.quantity).reduce((sum, count) => sum + count, 0)
  })

  return { cart, addToCart, clearCart, totalSum};
});
