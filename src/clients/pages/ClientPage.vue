<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import { useRoute } from 'vue-router';
import useClient from '../composables/useClient';
import { useMutation } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';
import type { Client } from '../interfaces/client';

const id = useRoute().params.id;

const {client, isLoading} = useClient(+id);

const updateClient = async( client:Client ):Promise<Client> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const {data} = await clientsApi.patch<Client>(`clients/${client.id}`, client);
  return data;
}

const clientMutation = useMutation<Client, Error, Client>({
  mutationFn: updateClient,
});

</script>

<template>
  <h3 v-if="clientMutation.isPending.value">Guardando...</h3>
  <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>
  <LoadingModal v-if=isLoading />
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="clientMutation.mutate(client)">
      <input
      type="text"
      placeholder="Nombre del cliente"
      v-model="client.name"/>
      <input
      type="text"
      placeholder="Dirección"
      v-model="client.address"/>
      <button
        :disabled="clientMutation.isPending.value"
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