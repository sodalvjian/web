import Layout from '@/layout'
export default [
  {
    path: '/test',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/test',
        name: 'realtimeAnalysisTest',
        component: () => import('@/views/realtime-analysis-test-page'),
        hidden: true,
        meta: {
          title: 'Realtime analysis test',
          icon: '#iconRealtimeAnalysis',
          keepAlive: true
        }
      }
    ]
  }
]
