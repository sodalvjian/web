import Layout from '@/layout'
export default [
  {
    path: '/user',
    component: Layout,
    redirect: 'noRedirect',
    hidden: true,
    roles: [''],
    children: [
      {
        path: 'cost',
        name: 'cost',
        component: () => import('@/views/user-page/pages/cost-management'),
        meta: {
          title: 'Cost'
        }
      },
      {
        path: 'billDetail',
        name: 'billDetail',
        component: () => import('@/views/user-page/pages/bill-detail'),
        meta: {
          title: 'billDetail'
        }
      },
      {
        path: 'personalInfo',
        name: 'personalInfo',
        component: () => import('@/views/user-page/pages/personal-info'),
        meta: {
          title: 'personalInfo'
        }
      },
      {
        path: 'accountPassword',
        name: 'accountPassword',
        component: () => import('@/views/user-page/pages/account-password'),
        meta: {
          title: 'accountPassword'
        }
      },
      {
        path: 'orderInvoice',
        name: 'orderInvoice',
        component: () => import('@/views/user-page/pages/order-invoice'),
        meta: {
          title: 'orderInvoice'
        }
      }
    ]
  }
]
