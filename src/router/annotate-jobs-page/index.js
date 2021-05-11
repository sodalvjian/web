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
          title: 'Batch Analysis',
          icon: '#iconAnnotatejobs'
        }
      }, {
        path: '/jobDetails',
        name: 'Job details',
        component: () => import('@/views/annotate-jobs-page/pages/job-details'),
        hidden: true,
        meta: {
          title: 'Job Details',
          keepAlive: false,
          icon: '#icon-A18'
        }
      }
    ]
  }
]
