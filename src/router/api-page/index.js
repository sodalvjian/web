import Layout from '@/layout'
export default [
  {
    path: '/api',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/api',
        name: 'api',
        component: () => import('@/views/api-page'),
        meta: {
          title: 'API',
          keepAlive: false,
          icon: '#icon-API'
        }
      }
    ]
  }
]
