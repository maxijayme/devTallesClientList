<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import { useRoute } from 'vue-router';
import useClient from '../composables/useClient';

const id = useRoute().params.id;

const {client, isLoading} = useClient(+id);

</script>

<template>
  <h3>Guardando...</h3>
  <h3>Guardo</h3>
  <LoadingModal v-if=isLoading />
  <div>
    <h1>PEPE</h1>
    <form></form>
      <input type="text" placeholder="Nombre del cliente"/>
      <input type="text" placeholder="Dirección"/>
      <button type="submit">Guardar</button>
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