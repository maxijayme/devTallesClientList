import { createRouter, createWebHistory } from 'vue-router'
import Counter1page from '@/counter/pages/Counter1page.vue'
import Counter2page from '@/counter/pages/Counter2page.vue'
import ClientsLayout from '@/clients/layout/ClientsLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-page',
      component: Counter1page,
    },
    {
      path: '/setup',
      name: 'counter-setup-page',
      component: Counter2page,
    },
    {
      path: '/clients',
      name: 'clients',
      redirect: { name: 'client-list' },
      component: ClientsLayout,
      children: [
        {
          path: 'list',
          name: 'client-list',
          component: () => import('@/clients/pages/ListPage.vue'),
        },
        {
          path: 'clients/:id',
          name: 'client-id',
          component: () => import('@/clients/pages/ClientPage.vue'),
        },
      ],
    },
  ],
})

export default router
