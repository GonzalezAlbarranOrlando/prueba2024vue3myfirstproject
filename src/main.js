import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
// npm install bootstrap@5
import 'bootstrap/dist/css/bootstrap.min.css';
// npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.css';

import Test from '../src/components/Test.vue';
import Acerca from '../src/components/Acerca.vue';

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: Acerca
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
