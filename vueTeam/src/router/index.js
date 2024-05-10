import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import BoardView from '@/views/BoardView.vue'
import MyPageView from '@/views/MyPageView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/myPage',
      name: 'mypage',
      component: MyPageView
    },
    {
      path: '/loginPage',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
