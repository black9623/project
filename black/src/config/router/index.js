import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/recommend/home/Hello'
import index from '@/components/recommend/home/index'
import live from '@/components/recommend/home/live'
import nurse from '@/components/recommend/home/nurse'
import beauty from '@/components/recommend/home/Beauty'
import luggage from '@/components/recommend/home/luggage'
import Chassification from '@/components/recommend/classification/index'
import clifIndex from '@/components/recommend/classification/classification.vue'
import brand from '@/components/recommend/classification/Brand.vue'
import Shoppingcart from '@/components/recommend/Shoppingcart/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if(savedPosition){
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
  }
  },
  routes: [
    {
      path: '/',
      redirect: '/Hello/index/2'    //  重定向
    },
    {
      path: '/Hello',
      component: Hello,
      children: [
        {
          path: 'index/:id',
          component: index,
        },
        {
          path: 'live/:id',
          component: live,
        },
        {
          path: 'nurse/:id',
          component: beauty,
        },
        {
          path: 'beauty/:id',
          component: nurse,
        },
        {
          path: 'luggage/:id',
          component: luggage,
        }
      ]
    },
    {
      path: '/Chassification',
      component: Chassification,
      redirect:'Chassification/clifIndex',
      children: [
        {
          path: 'clifIndex',
          component: clifIndex,
        },{
          path: 'brand',
          component: brand,
        }
      ]
    },
    {
      path: '/Shoppingcart',
      component: Shoppingcart,
    }
  ]
})
