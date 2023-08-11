import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from "axios";

export const useUserStore = defineStore('user', () => {
  const login = ref('');
  const name = ref('');
  const email = ref('');
  const address = ref('');
  async function saveOrder(orderData, callback) {
    await axios.post('https://reqbin.com/echo/post/json', JSON.stringify(orderData),{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => console.log(JSON.stringify(response)))
      .then(callback)
      .catch((error) => {
        alert(error);
      });
  }
  function setUser() {
    login.value = localStorage.getItem('productLogin');
  }
  function logout() {
    localStorage.setItem('productLogin', '');
    login.value = '';
  }
  const isNotAuthorized = computed(() => login.value === '');
  const isAdmin = computed(() => login.value === 'admin');
  return {
    logout,
    saveOrder,
    setUser,
    isNotAuthorized,
    login,
    name,
    email,
    address,
    isAdmin
  };
});
