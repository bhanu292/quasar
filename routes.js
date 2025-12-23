const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
  { path: '', component: () => import('pages/IndexPage.vue') },
  { path: 'students', component: () => import('pages/StudentsPage.vue') },
  { path: 'add-student', component: () => import('pages/AddStudentPage.vue') },
  { path: 'edit-student/:id',component: () => import('pages/EditStudentPage.vue') }

]

  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
