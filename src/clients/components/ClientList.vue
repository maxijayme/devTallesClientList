<script setup lang="ts">
import { toRefs, type PropType } from 'vue';
import { RouterLink } from 'vue-router';
import type { Client } from "../interfaces/client";

const props = defineProps({
  clients: { type: Array as PropType<Client[]> }
});

const { clients } = toRefs(props);

</script>

<template>
  <ul>
    <li v-for="client of clients" :key="client.id">
      <RouterLink :to="{
        name:'client-id',
        params: { 'id': client.id}
      }">
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>


<style scoped>

</style>