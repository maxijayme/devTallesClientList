<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import { useRoute, useRouter } from 'vue-router';
import useClient from '../composables/useClient';

import { watch } from 'vue';

const id = useRoute().params.id;
const router = useRouter();

const {client, isUpdating, isUpdated, isLoading, isError, updateClient} = useClient(+id);




watch(isError, () => {
  router.replace('/clients');
});

</script>

<template>
  <h3 v-if="isUpdating">Guardando...</h3>
  <h3 v-if="isUpdated">Guardado</h3>
  <LoadingModal v-if=isLoading />
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client)">
      <input
      type="text"
      placeholder="Nombre del cliente"
      v-model="client.name"/>
      <input
      type="text"
      placeholder="Dirección"
      v-model="client.address"/>
      <button
        :disabled="isUpdating"
        type="submit"
      >Guardar</button>

    </form>
  </div>
  <code>
    {{ client }}
  </code>
</template>

<style scoped>
  input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
  button {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var( --color-border );
    color: var( --color-text );
    cursor: pointer;
    margin-right: 5px;
    padding: 10px;
    transition: all .5s;
}

button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    transition: all .5s;
}
button:disabled {
    cursor: not-allowed;
}
</style>