<script setup lang="ts">
import { useCounterSetupStore } from '@/store/couter-setup';


const store = useCounterSetupStore()

</script>


<template>
  <h1>El valor es: {{ store.count }}</h1>
  <h3>El último cambio fue: {{ store.lastChange }}</h3>
</template>

<style scoped>

</style>