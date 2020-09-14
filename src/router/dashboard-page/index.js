import Layout from '@/layout'
export default [
  {
    path: '',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: 'Dashboard',
          icon: '#icon-A14'
        }
      }
    ]
  }
]
