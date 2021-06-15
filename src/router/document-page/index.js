import Layout from '@/layout'
export default [
  {
    path: '/document',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/document',
        name: 'document',
        component: () => import('@/views/document-page'),
        meta: {
          title: 'Document',
          keepAlive: false,
          icon: '#icon-wendang'
        }
      }
    ]
  }
]
