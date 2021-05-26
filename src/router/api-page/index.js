import Layout from '@/layout'
export default [
  {
    path: '/handleApi',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/handleApi',
        name: 'apiPage',
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
