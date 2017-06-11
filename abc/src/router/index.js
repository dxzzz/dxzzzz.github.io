import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Daily from '@/components/Daily'
import Details from '@/components/Details'
import DailyList from '@/components/DailyList'

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        redirect: '/daily'
    }, {
        path: '/daily/',
        name: 'Daily',
        component: Daily
    }, {
        path: '/hello/',
        name: 'Hello',
        component: Hello
    }, {
        path: "/details/:id",
        name:'Details',
        component: Details
    },{
        path: "/daily/:id",
        name:'DailyList',
        component: DailyList
    }]
})