import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HonorView from  '../views/HonorView.vue'
import TeamDynamics from '../views/TeamDynamics.vue'
import Achievements from '../views/AchievementsView.vue'
import OrganizationView from '../views/OrganizationView.vue'
const routes = [
  {
    path: '/test',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    component:AboutView
  },
  {
    path:'/honor',
    name:'honor',
    component:HonorView
  },
  {
    path:'/dynamics',
    name:'dynamics',
    component:TeamDynamics
  },
  {
    path:'/achieve',
    name:'achieve',
    component:Achievements
  },
  {
    path:'/organization',
    name:'organization',
    component:OrganizationView,
    children:[
      {
        path:'teacher',
        name:'teacher',
        component:()=> import('../views/TeacherView.vue')
      },
      {
        path:'student',
        name:'student',
        component:()=> import('../views/StudentView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
