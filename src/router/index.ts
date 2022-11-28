import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import PageViewer from '@/views/Page.vue';
import NotFound from "@/views/404.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page/:identifier',
    name: "PageViewer",
    component: PageViewer,
    props: true,
  },
  {
    path: '/notFound',
    name: "NotFound",
    component: NotFound,
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
