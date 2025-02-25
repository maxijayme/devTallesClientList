<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClients from '../composables/useClients';

const {isLoading, clients, currentPage, totalPages, setPage} = useClients();

</script>

<template>
  <div>
    <h1>Lista de clientes</h1>

    <!-- Client list -->
     <ClientList :clients/>
    <!-- PaginationNumbers -->
     <PaginationNumbers :currentPage :totalPages @setPage="setPage"/>
    <!-- LoadingModal -->
     <LoadingModal v-if="isLoading"/>
  </div>
</template>

<style scoped>

</style>