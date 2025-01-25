<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/couter-setup';
import CounterSetupValue from '../components/CounterSetupValue.vue';

const counterStore = useCounterSetupStore()
const {count, squareCount} = storeToRefs(counterStore)
const {incrementBy, incrementByOne, reset} = counterStore

</script>
<template>
  <h1>Counter Setup :</h1>
  <h4>coutner: {{count}}</h4>
  <h4>square: {{squareCount}}</h4>

  <button @click="incrementByOne()">+1</button>
  <button @click="counterStore.incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="reset()">Reset</button>
  <br>
  <CounterSetupValue />

</template>

<style scoped>
button{
  margin-right: 10px;
}
</style>