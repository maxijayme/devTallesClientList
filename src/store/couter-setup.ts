import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterSetupStore = defineStore('counterSetup', () => {

  const count = ref<number>(0)
  const lastChange = ref<Date>()

  function incrementBy (value:number){
    count.value+=value
    lastChange.value = new Date()
  }

  function reset(){
    count.value = 0
    lastChange.value = undefined
  }

  return {
    //state
    count,
    lastChange,

    //getters
    squareCount: computed(()=> count.value * count.value),
    
    //actions
    incrementBy,
    incrementByOne: () => incrementBy(1),
    reset
  }
})