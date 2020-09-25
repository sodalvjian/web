import Layout from '@/layout'
export default [
  {
    path: '/',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/',
        name: 'realtimeAnalysis',
        component: () => import('@/views/realtime-analysis-page'),
        meta: {
          title: 'Realtime analysis',
          icon: '#iconRealtimeAnalysis',
          keepAlive: true
        }
      }
    ]
  }
]
