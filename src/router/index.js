import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Dashboard from '@/components/page/Dashboard'
import BaseTable from '@/components/page/BaseTable'
import Tabs from '@/components/page/Tabs'
import BaseForm from '@/components/page/BaseForm'
import VueEditor from '@/components/page/VueEditor'
import Markdown from '@/components/page/Markdown'
import Upload from '@/components/page/Upload'
import BaseCharts from '@/components/page/BaseCharts'
import DragList from '@/components/page/DragList'
import Permission from '@/components/page/Permission'
import Login from '@/components/page/Login'
import Page404 from '@/components/page/404'
import Page403 from '@/components/page/403'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: Home,
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: BaseTable,
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: Tabs,
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: BaseForm,
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: VueEditor,
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: Markdown,
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: Upload,
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: BaseCharts,
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: DragList,
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: Permission,
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/404',
            component: Page404
        },
        {
            path: '/403',
            component: Page403
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
