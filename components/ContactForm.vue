<template>
  <div class="bg-[#FAF0D7] p-6 sm:p-8">
    <div class="hidden sm:flex justify-between items-start gap-12">
      <div>
        <p class="text-lg font-bold text-[#435FDD]">Электронная почта</p>
        <p class="text-[#263B56]">email@gmail.com</p>
        <p class="text-lg font-bold text-[#435FDD] mt-4">Телефон</p>
        <p class="text-[#263B56]">123-45-67</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-vk"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <div>
        <input
          v-model="form.name"
          type="text"
          placeholder="Ваше имя"
          class="px-4 py-2 rounded-[37px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FE4E4E] w-full"
          :class="{ 'border-red-500': errors.name }"
        />
        <button
          type="submit"
          @click="onSubmit"
          class="bg-[#FE4E4E] text-white px-6 py-2 rounded-[37px] hover:bg-opacity-90 mt-4 w-full"
        >
          Записаться
        </button>
      </div>

      <div>
        <input
          v-model="form.phone"
          type="text"
          placeholder="Ваш телефон"
          class="px-4 py-2 rounded-[37px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FE4E4E] w-full"
          :class="{ 'border-red-500': errors.phone }"
        />
        <p class="text-[#263B56] mt-4">
          Наш менеджер свяжется<br />с вами в течении дня
        </p>
      </div>
    </div>

    <div class="sm:hidden flex flex-col gap-6">
      <div class="flex justify-between">
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="bg-[#FE4E4E] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90"
        >
          <i class="fab fa-vk"></i>
        </a>
      </div>

      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-3">
          <p class="text-lg font-bold text-[#435FDD]">Электронная почта</p>
          <p class="text-[#263B56]">email@gmail.com</p>
        </div>
        <div class="col-span-2">
          <p class="text-lg font-bold text-[#435FDD]">Телефон</p>
          <p class="text-[#263B56]">123-45-67</p>
        </div>
      </div>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Ваше имя"
            class="px-4 py-2 rounded-[37px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FE4E4E] w-full"
            :class="{ 'border-red-500': errors.name }"
          />
          <span v-if="errors.name" class="text-red-500 text-sm">{{
            errors.name
          }}</span>
        </div>
        <div>
          <input
            v-model="form.phone"
            type="text"
            placeholder="Ваш телефон"
            class="px-4 py-2 rounded-[37px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FE4E4E] w-full"
            :class="{ 'border-red-500': errors.phone }"
          />
          <span v-if="errors.phone" class="text-red-500 text-sm">{{
            errors.phone
          }}</span>
        </div>
        <div class="text-left">
          <p class="text-[#263B56]">
            Наш менеджер свяжется<br />с вами в течении дня
          </p>
          <button
            type="submit"
            class="bg-[#FE4E4E] text-white px-6 py-2 rounded-[37px] hover:bg-opacity-90 mt-4"
          >
            Записаться
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useFormStore } from '~/stores/form';

const formStore = useFormStore();

const form = ref({
  name: '',
  phone: '',
});

const errors = ref({
  name: '',
  phone: '',
});

const validateForm = () => {
  errors.value = {
    name: '',
    phone: '',
  };

  if (!form.value.name) {
    errors.value.name = 'Имя обязательно';
  }

  if (!form.value.phone) {
    errors.value.phone = 'Телефон обязателен';
  } else if (!/^\d{3}-\d{2}-\d{2}$/.test(form.value.phone)) {
    errors.value.phone = 'Формат: 123-45-67';
  }

  return !errors.value.name && !errors.value.phone;
};

const onSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await formStore.submitForm(form.value);
      alert(
        `Форма отправлена успешно!\nИмя: ${form.value.name}\nТелефон: ${form.value.phone}`
      );
      form.value = { name: '', phone: '' };
    } catch (error) {
      alert('Произошла ошибка при отправке формы');
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
