import Vue from 'vue'
import Router from 'vue-router'
import Area from '@/DataCenter/Area'
import Staff from '@/DataCenter/Staff'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/area',
    	name: 'Area',
    	component: Area
    },{
    	path: '/staff',
    	name: 'Staff',
    	component: Staff
    }

  ]
})
