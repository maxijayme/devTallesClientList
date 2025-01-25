import type { Client } from '@/clients/interfaces/client'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClientsStore = defineStore('client', () => {

  const currentPage = ref<number>(1)
  const totalPages = ref<number>(5)
  const clients = ref<Client[]>([])

  return {
    //state
    currentPage,
    totalPages,
    clients,

    //getters
    //squareCount: computed(()=> count.value * count.value)
    setClients( newClients: Client[] ) {
      clients.value = newClients
    },

    setPage( page:number ) {
      if (page === currentPage.value) return
      else currentPage.value = page
    }
    //actions

  }
})