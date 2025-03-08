import { useQuery } from "@tanstack/vue-query";
import { ref, watch } from "vue";
import type { Client } from "@/clients/interfaces/client";
import clientsApi from "@/api/clients-api";

const getClient = async( id: number ) => {
  const {data} = await clientsApi.get<Client>(`/clients/${id}`);
  return data;
}

const useClient = (id:number) => {

  const client = ref<Client>();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['client', 'id', id],
    queryFn:() => getClient(id),
  })

  watch(data, () => {
    if (data.value) {
      client.value = {...data.value};
    }
  }, {immediate: true})

   return {
    client,
    isError,
    isLoading
   }
}

export default useClient;