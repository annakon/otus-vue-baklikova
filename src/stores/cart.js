import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cart = ref(new Map());
  const totalSum = ref(0);

  function addToCart(product) {
    let item = cart.value.get(product.id);

    if (item) {
      item.quantity++;
      totalSum.value = totalSum.value + product.price * item.quantity;
      alert('В корзине: ' + item.quantity);
    } else {
      cart.value.set(product.id, { ...product, quantity: 1 });
      totalSum.value = totalSum.value + product.price;
      alert('В корзине: 1');
    }
  }

  function clearCart() {
    cart.value.clear();
    totalSum.value = 0;
  }

  return { cart, addToCart, clearCart, totalSum };
});
