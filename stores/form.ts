import { defineStore } from 'pinia';

interface FormData {
  name: string;
  phone: string;
}

export const useFormStore = defineStore('form', {
  state: () => ({
    name: '',
    phone: '',
  }),
  actions: {
    async submitForm(data: FormData) {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json',
            },
          }
        );
        return await response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
  },
});
