import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StudyRoom from '../views/StudyRoom.vue'
import Message from '../views/Message.vue'
import Room from '../views/Room.vue'
import Building from '../views/pages/Building.vue'
import Detail from '../views/pages/Detail.vue'
import Login from '../views/Login.vue'
import Report from '../views/pages/Report.vue'
import Personal from '../views/Personal.vue'
import CheckReport from '../views/pages/CheckReport.vue'
import ReportDetail from '../views/pages/ReportDetail.vue'
import ConfigPwd from '../views/pages/ConfigPwd.vue'

const router = new createRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            redirect: { name: 'Room' },
            name: 'Home',
            children: [
                {
                    path: 'room',
                    component: Room,
                    name: 'Room'
                },
                {
                    path: 'studyroom',
                    component: StudyRoom,
                    name: 'StudyRoom'
                },
                {
                    path: 'message',
                    component: Message,
                    name: 'Message'
                },
                {
                    path: 'personal',
                    component: Personal,
                    name: 'Personal'
                }
            ]
        },
        {
            path: '/building',
            component: Building,
            name: 'Building'
        },
        {
            path: '/detail',
            component: Detail,
            name: 'Detail'
        },
        {
            path: '/report',
            component: Report,
            name: 'Report'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/check',
            component: CheckReport,
            name: 'CheckReport',
        },
        {
            path: '/reportDetail',
            component: ReportDetail,
            name: 'ReportDetail'
        },
        {
            path: '/configPwd',
            component: ConfigPwd,
            name: 'ConfigPwd'
        }
    ],
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    if (to.path === '/configPwd') return next()
    if (from.path === '/report') {
        sessionStorage.removeItem('reportForm')
        sessionStorage.removeItem('selectedOptions')
        return next()
    }
    if (Boolean(sessionStorage.getItem('isFirstLogin'))) return next('/configPwd')
    else next()
})

export default router