import { defineStore } from 'pinia';
import {computed, ref} from "vue";

export const useUserStore = defineStore('user', () => {

  const login=ref('');
  const name = ref('');
  const email = ref('');
  const address = ref('');
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
  function  setUser() {
    login.value=localStorage.getItem('productLogin');
  }
  const isNotAuthorized = computed( () =>login.value === '');
  return {
    saveOrder, setUser, isNotAuthorized, login, name, email, address
  };
});
