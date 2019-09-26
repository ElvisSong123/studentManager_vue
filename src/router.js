import Vue from 'vue'
import Router from 'vue-router';
import firstPage from '@/views/firstPage';
import addStu from '@/components/addStudent';
import stuList from '@/components/studentList';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'firstPage',
            component: firstPage,
            redirect: '/stuList',
            children: [{

                path: '/addStu',
                name: 'addStu',
                component: addStu
            }, {
                path: '/stuList',
                name: 'stuList',
                component: stuList,
            }]
        }


    ],
    linkActiveClass: 'active'
})