<script setup lang="ts">
import useClients from '../composables/useClients';

const { setPage, currentPage, totalPaginationNumbers } = useClients();

</script>

<template>
  <div>
    <button @click="setPage(currentPage-1)" :disabled="currentPage===1">Prev</button>
    <button
      v-for="page in totalPaginationNumbers"
      :key="page"
      :class="{ active: currentPage === page }"
      @click="setPage(page)"
    >{{ page }}</button>
    <button @click="setPage(currentPage+1)" :disabled="currentPage===totalPaginationNumbers.length">Next</button>

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