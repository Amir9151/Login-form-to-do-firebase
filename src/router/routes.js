
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'setting', component: () => import('pages/pagesetting.vue') },
      { path: '/setting/help', component: () => import('pages/help.vue') },
      { path: '/auth', component: () => import('pages/pageAuth.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
