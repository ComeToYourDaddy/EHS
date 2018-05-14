import Vue from 'vue'
import Router from 'vue-router'
import Area from '@/DataCenter/Area'
import Staff from '@/DataCenter/Staff'
<<<<<<< HEAD
import Train_course from '@/TrainCenter/Train_course'
import Train_reqiure from '@/TrainCenter/Train_reqiure'
import Train_plane from '@/TrainCenter/Train_plane'
import person_center from '@/TrainCenter/person_center'
import Train_report from '@/TrainCenter/Train_report'
=======
>>>>>>> acdee2519363561b13d28265a05c5f918b12364b

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
<<<<<<< HEAD
    },{
        path: '/train_course',
        name: '/Train_course',
        component: Train_course
    },{
        path: '/train_reqiure',
        name: '/Train_reqiure',
        component: Train_reqiure
    },{
        path: '/train_plane',
        name: '/Train_plane',
        component: Train_plane
    },{
        path: '/person_center',
        name: '/person_center',
        component: person_center
    },{
        path: '/train_report',
        name: '/Train_report',
        component: Train_report
=======
>>>>>>> acdee2519363561b13d28265a05c5f918b12364b
    }

  ]
})