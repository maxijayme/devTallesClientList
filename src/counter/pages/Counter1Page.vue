<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';
import { storeToRefs } from 'pinia';

const counterStore = useCounterOptionsStore()
const {count, squareCount} = storeToRefs(counterStore)
const {incrementBy, incrementByOne} = counterStore

</script>
<template>
  <h1>Counter Options :</h1>
  <h4>coutner: {{count}}</h4>
  <h4>square: {{squareCount}}</h4>

  <button @click="incrementByOne()">+1</button>
  <button @click="counterStore.incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="counterStore.$reset()">Reset</button>
  <br>
  <CounterOptionsValue />

</template>

<style scoped>
button{
  margin-right: 10px;
}
</style>