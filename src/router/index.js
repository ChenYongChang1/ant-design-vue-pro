import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'basic',
    // redirect: '/dashboard',
    component: () =>
      import(
        /* webpackChunkName: "Layout" */ '../components/layouts/BasicLayout.vue'
      ),
    children: [
      {
        path: '/dashboard',
        name: '仪表盘',
        meta: {
          icon: 'dashboard',
          title: '仪表盘',
        },
        redirect: '/dashboard/analysis',
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '../components/layouts/Analysis.vue'
          ),
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {
              title: '分析页',
            },
            component: () =>
              import(
                /* webpackChunkName: "Analysis" */ '../views/Analysis/Analysis.vue'
              ),
          },
          {
            path: '/dashboard/analysis1',
            name: 'analysis1',
            meta: {
              title: '分析页2',
            },
            component: () =>
              import(
                /* webpackChunkName: "Analysis" */ '../views/Analysis/Analysis.vue'
              ),
          },
        ],
      },
      {
        path: '/form',
        name: 'form',
        meta: { icon: 'form', title: '表单' },
        component: () =>
          import(
            /* webpackChunkName: "Layout" */ '../components/layouts/FormLayout.vue'
          ),
        children: [
          {
            path: '/form/stepform',
            name: 'stepform',
            meta: { title: '分部表单' },
            hideChildInMune: true,
            component: () =>
              import(
                /* webpackChunkName: "Layout" */ '../views/Form/FormIndex.vue'
              ),
            children: [
              {
                path: 'step1',
                name: '第一步',
                component: () =>
                  import(
                    /* webpackChunkName: "Layout" */ '../views/Form/Step1.vue'
                  ),
              },
              {
                path: 'step2',
                name: '第二步',
                component: () =>
                  import(
                    /* webpackChunkName: "Layout" */ '../views/Form/Step2.vue'
                  ),
              },
              {
                path: 'step3',
                name: '第三步',
                component: () =>
                  import(
                    /* webpackChunkName: "Layout" */ '../views/Form/Step3.vue'
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/user',
    hideInMenu: true,
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
    hideInMenu: true,
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
