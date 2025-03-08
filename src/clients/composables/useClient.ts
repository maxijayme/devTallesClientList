import { useMutation, useQuery } from "@tanstack/vue-query";
import { computed, ref, watch } from "vue";
import type { Client } from "@/clients/interfaces/client";
import clientsApi from "@/api/clients-api";
//import { useQueryClient } from '@tanstack/vue-query';

//const queryClient = useQueryClient();
const getClient = async( id: number ) => {
  const {data} = await clientsApi.get<Client>(`/clients/${id}`);
  return data;
}

const updateClient = async( client:Client ):Promise<Client> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const {data} = await clientsApi.patch<Client>(`clients/${client.id}`, client);
  //const queries = queryClient.getQueryCache().clear();//borra toda la cache
  //const queries = queryClient.getQueryCache().findAll({ queryKey: ['clients','page'], exact: false });
  // queries.forEach((query) => { query.reset() });//borra la cache de cada pagina
  //queries.forEach((query) => { query.fetch() }); // refresca la cache de cada pagina

  return data;
}

const useClient = (id:number) => {

  const client = ref<Client>();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['client', 'id', id],
    queryFn:() => getClient(id),
  })

  const clientMutation = useMutation<Client, Error, Client>({
    mutationFn: updateClient,
  });

  watch(data, () => {
    if (data.value) {
      client.value = {...data.value};
    }
  }, {immediate: true})

   return {
    client,
    isError,
    isLoading,
    //Methods
    isUpdating: computed(() => clientMutation.isPending.value),
    isUpdated: computed(() => clientMutation.isSuccess.value),
    updateClient: computed(() => clientMutation.mutate)
   }
}

export default useClient;