import Layout from '@/layout'
export default [
  {
    path: '/roles',
    component: Layout,
    roles: ['XSROLE'],
    children: [
      {
        path: '/roles',
        name: 'Roles',
        component: () => import('@/views/roles-page'),
        meta: {
          title: 'Roles',
          icon: '#icon-A18'
        }
      }
    ]
  }
]
