import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'basic',
    component: () =>
      import(
        /* webpackChunkName: "Layout" */ '../components/layouts/BasicLayout.vue'
      ),
    children: [
      {
        path: '/analysis',
        name: '分析页',
        redirect: '/analysis/basic',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '../components/layouts/Analysis.vue'
          ),
        children: [
          {
            path: 'basic',
            name: '分析',
            component: () =>
              import(
                /* webpackChunkName: "Analysis" */ '../views/Analysis/Analysis.vue'
              ),
          },
        ],
      },
    ],
  },
  {
    path: '/user',
    component: () =>
      import(
        /* webpackChunkName: "user" */ '../components/layouts/UserLayout.vue'
      ),
    // component: { render: h => h('router-view') },
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        path: 'login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/User/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/User/Register.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
