import Layout from '@/layout'
export default [
  {
    path: '/realtimeAnalysis',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/realtimeAnalysis',
        name: 'realtimeAnalysis',
        component: () => import('@/views/realtime-analysis-page'),
        meta: {
          title: 'Real-time Analysis',
          icon: '#icon-Vector',
          keepAlive: true
        }
      }
    ]
  }
]
