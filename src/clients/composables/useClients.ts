import { computed, watch } from "vue";
import clientesApi from "@/api/clients-api";
import { useQuery } from "@tanstack/vue-query";
import type { Client } from "../interfaces/client";
import { useClientsStore } from "@/store/clients";
import { storeToRefs } from "pinia";


const getClients = async( page: number ):Promise<Client[]> => {
  //para demorar la respuesta
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const {data} = await clientesApi.get<{ data: Client[]}>(`/clients?_page=${page}`);
  return data.data
}

const useClients = () => {

  const store = useClientsStore();
  const {clients, currentPage, totalPages} = storeToRefs(store);

  const { isLoading, data } = useQuery({
    queryKey: ['clients', 'page', currentPage],
    queryFn:() => getClients(currentPage.value),
  });

  watch(data, (clientsData) => {
    if (clientsData) {
      store.setClients(clientsData);
    }
  })

  return {
    //Properties
    isLoading,
    clients,
    currentPage,
    totalPages,

    //Methods
    setPage(page: number) {
      store.setPage(page);
    },

    //Actions
    // totalPaginationNumbers: computed(
    //   () => {
    //     return Array.from({ length: totalPages.value }, (_, index) => index + 1);
    //   }
    // )
  }
}

export default useClients;