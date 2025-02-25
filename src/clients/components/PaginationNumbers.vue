<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

interface Props {
  currentPage: number;
  totalPages: number;
}

interface Emit {
  (event: 'setPage', page: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const totalPaginationNumbers = ref<number[]>([]);
const { currentPage, totalPages} = toRefs(props)

watch ( currentPage, () =>
  totalPaginationNumbers.value = [...new Array(totalPages.value)].map( (v, i) => i + 1 )
  , ( { immediate: true } )
)


</script>

<template>
  <div>
    <button @click="emit('setPage', +1)" :disabled="currentPage===1">Prev</button>
    <button
      v-for="page in totalPaginationNumbers"
      :key="page"
      :class="{ active: currentPage === page }"
      @click="$emit('setPage', page)"
    >{{ page }}</button>
    <button @click="$emit('setPage', -1)" :disabled="currentPage===totalPaginationNumbers.length">Next</button>

  </div>
</template>

<style scoped>
div {
    margin-top: 10px;
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

.active {
    background-color: hsla(160, 100%, 37%, 0.2);
}
</style>