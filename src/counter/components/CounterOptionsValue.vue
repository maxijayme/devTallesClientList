<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';


const store = useCounterOptionsStore()

</script>


<template>
  <h1>El valor es: {{ store.count }}</h1>
  <h3>El último cambio fue: {{ store.lastChanged }}</h3>
</template>

<style scoped>

</style>