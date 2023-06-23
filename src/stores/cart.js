import { ref } from 'vue';
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

  return { cart, addToCart, clearCart };
});
