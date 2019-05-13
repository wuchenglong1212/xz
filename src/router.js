import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import detail from '@/views/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:"/index",
  	component:index
  },
  {
  	path:"/detail",
  	component:detail
  },
  {
  	path:"*",
  	redirect:"/detail"
  }
  ]
})
