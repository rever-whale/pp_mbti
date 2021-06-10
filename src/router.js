import {createRouter, createWebHistory} from 'vue-router';
import {Home, Loading, Intro, Question, Result, RoutePath} from '@/constants/router';

const routes = [
  {
    name: Home,
    path: RoutePath[Home],
    component: () => import('@/views/Home'),
  },
  {
    name: Loading,
    path: RoutePath[Loading],
    component: () => import('@/views/Loading'),
  },
  {
    name: Intro,
    path: RoutePath[Intro],
    component: () => import('@/views/Intro'),
  },
  {
    name: Question,
    path: RoutePath[Question],
    component: () => import('@/views/Question'),
  },
  {
    name: Result,
    path: RoutePath[Result],
    component: () => import('@/views/Result'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
