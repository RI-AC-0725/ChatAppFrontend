import { createRouter, createWebHistory } from 'vue-router'
import window1 from '../views/Window.1.vue'
import ChatApp from '../views/ChatApp.vue'
import RoomCreate from '../components/RoomCreate.vue'

const routes = [
{
path: '/',
name: 'window1',
component: window1
},
{
path: '/ChatApp',
name: 'ChatApp',
component: ChatApp,
},
{
  path: '/RoomCreate',
  name: 'RoomCreate',
  component: RoomCreate
  }
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router