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
        }
    ],
    history: createWebHashHistory()
})

export default router