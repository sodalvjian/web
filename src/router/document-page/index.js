import Layout from '@/layout'
export default {
  path: '/document',
  component: Layout,
  roles: [''],
  name: 'document',
  meta: {
    title: 'Document',
    icon: '#icon-wendang'
  },
  children: [
    {
      path: '/document',
      component: () => import('@/views/document-page'),
      hidden: true,
      meta: {
        title: 'Overview',
        keepAlive: true
      }
    },
    {
      path: '/document#Overview',
      name: 'Overview',
      key: 'Overview',
      meta: {
        title: 'Overview',
        keepAlive: true
      }
    },
    {
      path: '/document#Login',
      name: 'Login',
      key: 'Login',
      meta: {
        title: 'Login',
        keepAlive: true
      }
    }
  ]
}
