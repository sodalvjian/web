import Layout from '@/layout'
export default [
  {
    path: '/annotateJobs',
    component: Layout,
    roles: [''],
    children: [
      {
        path: '/annotateJobs',
        name: 'annotateJobs',
        component: () => import('@/views/annotate-jobs-page'),
        meta: {
          title: 'Analysis Jobs',
          icon: '#iconAnnotatejobs'
        }
      }, {
        path: '/jobDetails',
        name: 'Job details',
        component: () => import('@/views/annotate-jobs-page/pages/job-details'),
        hidden: true,
        meta: {
          title: 'Analysis Jobs',
          icon: '#icon-A18'
        }
      }
    ]
  }
]
