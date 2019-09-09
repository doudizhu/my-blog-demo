import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from "vue-resource";

Vue.config.productionTip = false
Vue.use(VueResource)

// 自定义指令
// Vue.directive('rainbow',{
//   bind(el:any,binding:any,vnode:any){
//     el.style.color = '#' + Math.random().toString().slice(2,8);
//   }
// })
Vue.directive('theme',{
  bind(el:any,binding:any,vnode:any){
    if(binding.value === 'wide'){
      el.style.maxWidth = '1260px'
    }else if(binding.value === 'narrow'){
      el.style.maxWidth = '560px'
    }

    if(binding.arg === 'column'){
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})

// 自定义过滤器
// Vue.filter('to-uppercase',(value:string)=>{
//   return value.toUpperCase()
// })
Vue.filter('snippet',(value:string)=>{
  return value.slice(0,100)+'...'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
