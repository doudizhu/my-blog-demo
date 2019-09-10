import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/',
      component:()=>import('./components/ShowBlogs.vue'),
    },
    {
      path: '/add',
      component:()=>import('./components/AddBlog.vue'),
    },
    {
      path: '/blog/:id',
      component:()=>import('./components/SingleBlog.vue'),
    },
    {
      path: '/edit/:id',
      component:()=>import('./components/EditBlog.vue'),
    },
    {
      path: '/markdownDemo',
      component:()=>import('./components/MarkdownDemo.vue'),
    },
    {
      path: '/markdown',
      // component: { render (c:any) { return c('router-view') }},
      component:()=>import('./views/markdown/Layout.vue'),
      redirect:'/markdown/list',
      children:[
        {
          path: 'list',
          component:()=>import('./views/markdown/List.vue'),
        },
        {
          path: 'item/:id',
          component:()=>import('./views/markdown/Item.vue'),
        },
        {
          path: 'add',
          component:()=>import('./views/markdown/Add.vue'),
        },
        {
          path: 'edit/:id',
          component:()=>import('./views/markdown/Edit.vue'),
        },
      ]
    },
  ]
})
